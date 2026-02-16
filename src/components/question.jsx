const questions = [
  {
    id: 0,
    question: "เพศของคุณ ?",
    options: [
      { key: "A", text: "ชาย", trait: "man" },
      { key: "B", text: "หญิง", trait: "girl" },
      { key: "C", text: "LGBQ+", trait: "LGBQ" },
    ],
  },
  {
    id: 1,
    question: "ตอนที่ไม่มีใครเห็นคุณเลย คุณเป็นแบบไหน?",
    options: [
      { key: "A", text: "สบาย ๆ ไม่ต้องเก่ง ไม่ต้องแข็งแรง", trait: "heart" },
      { key: "B", text: "คิดเยอะ วนกับความคิดตัวเอง", trait: "growth" },
      { key: "C", text: "เหนื่อย แต่ยังพยายามบอกตัวเองว่าไหว", trait: "survival" },
    ],
  },
  {
    id: 2,
    question: "สิ่งที่คุณกลัวจะเสียไปมากที่สุดคืออะไร?",
    options: [
      { key: "A", text: "คนสำคัญ", trait: "heart" },
      { key: "B", text: "โอกาสในชีวิต", trait: "growth" },
      { key: "C", text: "ตัวตน/ความฝันของตัวเอง", trait: "survival" },
    ],
  },
  {
    id: 3,
    question: "ลึก ๆ คุณพยายามพิสูจน์อะไรกับโลก?",
    options: [
      { key: "A", text: "ฉันมีค่ามากกว่าที่คนเคยมอง", trait: "heart" },
      { key: "B", text: "ฉันเก่งพอที่จะยืนด้วยตัวเอง", trait: "growth" },
      { key: "C", text: "ฉันไม่อ่อนแออย่างที่ใครคิด", trait: "survival" },
    ],
  },
  {
    id: 4,
    question: "ถ้าไม่มีใครตัดสินคุณเลย คุณจะ…",
    options: [
      { key: "A", text: "ใช้ชีวิตช้าลง ทำสิ่งที่สบายใจ", trait: "heart" },
      { key: "B", text: "กล้าลองสิ่งใหม่ที่ตอนนี้ยังไม่กล้า", trait: "growth" },
      { key: "C", text: "หยุดพยายามทำให้ทุกคนพอใจ", trait: "survival" },
    ],
  },
  {
    id: 5,
    question: "เสียงในหัวคุณบ่อยที่สุดเป็นแบบไหน?",
    options: [
      { key: "A", text: "อย่าพลาดนะ", trait: "growth" },
      { key: "B", text: "เธอทำได้ดีกว่านี้", trait: "growth" },
      { key: "C", text: "เหนื่อยแล้วนะ", trait: "survival" },
    ],
  },
  {
    id: 6,
    question: "สิ่งที่คุณยังให้อภัยตัวเองไม่ได้คือ…",
    options: [
      { key: "A", text: "การตัดสินใจพลาดในอดีต", trait: "heart" },
      { key: "B", text: "การไม่เก่งพอในบางช่วง", trait: "growth" },
      { key: "C", text: "การยอมให้บางคนทำร้ายความรู้สึก", trait: "survival" },
    ],
  },
  {
    id: 7,
    question: "เวลาคุณโกรธมาก ๆ จริง ๆ แล้วลึก ๆ คุณกำลัง…",
    options: [
      { key: "A", text: "เสียใจ", trait: "heart" },
      { key: "B", text: "ผิดหวัง", trait: "growth" },
      { key: "C", text: "รู้สึกไม่ถูกมองเห็น", trait: "survival" },
    ],
  },
  {
    id: 8,
    question: "เรื่องที่คุณอยากให้ใครสักคนเข้าใจคุณที่สุดคือ…",
    options: [
      { key: "A", text: "ฉันพยายามมากกว่าที่เห็น", trait: "heart" },
      { key: "B", text: "ฉันก็กลัวเหมือนกัน", trait: "growth" },
      { key: "C", text: "ฉันไม่ได้แข็งแรงตลอดเวลา", trait: "survival" },
    ],
  },
  {
    id: 9,
    question: "ถ้าวันหนึ่งคุณไม่ประสบความสำเร็จแบบที่หวัง คุณจะรู้สึกว่า…",
    options: [
      { key: "A", text: "ชีวิตยังมีค่าเพราะคนที่รัก", trait: "heart" },
      { key: "B", text: "ยังมีค่าเพราะประสบการณ์ที่ผ่าน", trait: "growth" },
      { key: "C", text: "จะรู้สึกเหมือนขาดอะไรบางอย่างในตัวเอง", trait: "survival" },
    ],
  },
  {
    id: 10,
    question: "เด็กตัวเล็ก ๆ ในอดีตของคุณมองคุณตอนนี้แล้วจะ…",
    options: [
      { key: "A", text: "ภูมิใจที่คุณยังสู้", trait: "heart" },
      { key: "B", text: "กอดคุณเพราะรู้ว่าคุณเหนื่อย", trait: "growth" },
      { key: "C", text: "สงสัยว่าทำไมคุณต้องแบกอะไรเยอะขนาดนี้", trait: "survival" },
    ],
  },
];

export default questions;
