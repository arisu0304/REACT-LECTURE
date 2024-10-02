import React, { useState } from "react";
import '../css/AuctionForm.css';

const AuctionForm = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="auction-form">
      {/* Header */}
      <header className="auction-header">
        <h1>물품등록</h1>
        <nav className="steps">
          <span className="step active">STEP 1</span>
          <span className="step">STEP 2</span>
          <span className="step">STEP 3</span>
          <span className="step">STEP 4</span>
        </nav>
      </header>

      {/* Category Selection */}
      <section className="category-selection">
        <h2>1. 카테고리 선택</h2>
        <div className="selection-group">
          <label htmlFor="category">경매 종류 선택:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="실시간 경매">실시간 경매</option>
            <option value="블라인드 경매">블라인드 경매</option>
            <option value="일반 경매">일반 경매</option>
          </select>
        </div>

        <div className="sub-category">
          <label htmlFor="subCategory">카테고리 선택:</label>
          <select
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="의류/잡화">의류/잡화</option>
            <option value="취미/수집">취미/수집</option>
            <option value="도서">도서</option>
            <option value="예술품">예술품</option>
            <option value="전자제품">전자제품</option>
            <option value="사진">사진</option>
          </select>
        </div>

        <div className="details-input">
          <label htmlFor="details">상세 분류 입력:</label>
          <input
            type="text"
            id="details"
            placeholder="상세 분류를 입력해주세요"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </section>

      {/* Current Fees */}
      <section className="fee-info">
        <p>현재 적용된 판매 수수료: <span className="fee">9.9%</span> (부가세 포함)</p>
      </section>

      {/* Next Step Button */}
      <button className="next-step" onClick={() => alert("Next step clicked")}>
        다음단계
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>ⓒ 2024 WANTED All pictures cannot be copied without permission.</p>
        <p>Company Info</p>
        <p>Email: bitcamp502@bitcamp.com | Tel: 010-1234-5678</p>
      </footer>
    </div>
  );
};

export default AuctionForm;
