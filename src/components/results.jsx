import { Button, Image } from "react-bootstrap";
import {
  analyzeResult,
  resultNarrative,
  deepInsights,
} from "../utils/analyzeResult";
import "./Result.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

const Result = ({ answers, setAnswers }) => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const savedResult = useMemo(() => {
    try {
      const raw = localStorage.getItem("myself-result");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const analysis = useMemo(() => {
    const currentAnswers =
      answers?.length > 0 ? answers : savedResult?.rawAnswers || [];
    return analyzeResult(currentAnswers);
  }, [answers, savedResult]);

  const group = analysis.primary;
  const secondaryGroup = analysis.secondary;
  const data = resultNarrative[group];
  const deep = deepInsights[group]; // ✅ ย้ายมาหลัง group ถูกสร้างแล้ว

  useEffect(() => {
    if (!answers?.length || !group || !data) return;
    const resultToSave = {
      group,
      result: data,
      rawAnswers: answers,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("myself-result", JSON.stringify(resultToSave));
  }, [answers, group, data]);

  const handleSaveImage = async () => {
    const element = document.getElementById("result-export-card");
    if (!element) return;

    setIsGenerating(true);
    const computedStyle = window.getComputedStyle(element);
    const currentBgColor = computedStyle.backgroundColor;

    element.classList.add("exporting");
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: currentBgColor,
        logging: false,
        onclone: (clonedDoc) => {
          const clonedCard = clonedDoc.querySelector(".result-card");
          if (clonedCard) {
            clonedCard.style.background = "#ffffff";
            clonedCard.style.backdropFilter = "none";
            clonedCard.style.webkitBackdropFilter = "none";
            clonedCard.style.animation = "none";
          }
        },
      });

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `result-${group}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      alert("ไม่สามารถบันทึกรูปได้");
    } finally {
      element.classList.remove("exporting");
      setIsGenerating(false);
    }
  };

  const handleRestart = () => {
    localStorage.removeItem("myself-result");
    setAnswers([]);
    navigate("/");
  };

  if (!group || !data) return <p>ไม่สามารถวิเคราะห์ได้</p>;

  return (
    <div id="result-export">
      <div className={`result-page-1 theme-${group}`} id="result-export-card">
        <div className="result-card">
          <div className="result-header text-center">
            <p className="result-label">ตัวตนหลักของคุณคือ</p>
            <h2 className="result-title">{data.title}</h2>
          </div>

          {data.image && (
            <div className="d-flex justify-content-center my-3">
              <Image
                className="result-image"
                src={data.image}
                alt={data.title}
                fluid
              />
            </div>
          )}

          <div className="result-story">
            <p>{data.story}</p>
          </div>

          <div className="secondary-analysis text-start">
            <p>
              <strong>มิติที่ซ่อนอยู่:</strong> แม้คุณจะเน้นเรื่อง{" "}
              {data.title} แต่ลึก ๆ คุณยังมีเฉดของ{" "}
              <strong>{resultNarrative[secondaryGroup]?.title}</strong>{" "}
              ผสมอยู่
            </p>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>🔍 แรงขับลึกภายใน</h4>
            <p>{deep.drive}</p>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>🧠 รูปแบบการปกป้องตัวเอง</h4>
            <p>{deep.defense}</p>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>💔 แผลลึกที่ซ่อนอยู่</h4>
            <p>{deep.wound}</p>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>🌱 เส้นทางการเติบโตของคุณ</h4>
            <p>{deep.growth}</p>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>🌱 จุดแข็ง</h4>
            <ul>
              {data.strength?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <hr className="divider" />

          <div className="result-section">
            <h4>🌗 สิ่งที่ควรระวัง</h4>
            <ul>
              {analysis.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>

          <hr className="divider" />

          <div className="result-actions no-export">
            <Button
              className="save-btn"
              onClick={handleSaveImage}
              disabled={isGenerating}
            >
              {isGenerating ? "กำลังบันทึก..." : "บันทึก"}
            </Button>
            <Button className="restart-btn" onClick={handleRestart}>
              เริ่มใหม่
            </Button>
          </div>

          <div className="result-footer mt-4 text-center">
            <p style={{ fontSize: "0.8rem", color: "#666" }}>
              ผลลัพธ์นี้ไม่ใช่คำตัดสิน แต่เป็นเพียงกระจกสะท้อนตัวคุณ
            </p>
            <div className="watermark">@whoyouare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
