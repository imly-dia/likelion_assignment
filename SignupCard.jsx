import React, { useState } from 'react';
import '../styles/Signup.css';

function SignupCard() {
  const [formData, setFormData] = useState({
    nickname: '',
    userId: '',
    password: '',
    passwordConfirm: '',
    phone: ''
  });

  const [idChecked, setIdChecked] = useState(null); 
  const [isPasswordMatched, setIsPasswordMatched] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // 실시간 비밀번호 일치 여부 체크
    if (name === 'password' || name === 'passwordConfirm') {
      if (updatedForm.password === '' && updatedForm.passwordConfirm === '') {
        setIsPasswordMatched(null);
      } else if (updatedForm.password === updatedForm.passwordConfirm) {
        setIsPasswordMatched(true);
      } else {
        setIsPasswordMatched(false);
      }
    }
  };

  const handleIdCheck = () => {
    if (!formData.userId.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (formData.userId === 'test' || formData.userId === 'admin') {
      setIdChecked(false);
    } else {
      setIdChecked(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idChecked !== true) {
      alert('아이디 중복 확인을 완료해주세요.');
      return;
    }
    if (isPasswordMatched !== true) {
      alert('비밀번호 일치 여부를 확인해주세요.');
      return;
    }
    alert('회원가입이 성공적으로 완료되었습니다! 🎉');
    console.log('가입 데이터:', formData);
  };

  return (
    <div className="signup-card-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Sign up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          
          {/* 닉네임 (이름) */}
          <div className="form-row">
            <label className="form-label">닉네임</label>
            <div className="input-container">
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="닉네임을 입력해주세요"
                className="form-input"
                required
              />
            </div>
          </div>

          {/* 아이디 */}
          <div className="form-row">
            <label className="form-label">아이디</label>
            <div className="input-container with-btn-layout">
              <div className="input-btn-row">
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="아이디를 입력해주세요"
                  className="form-input"
                  required
                />
                <button type="button" onClick={handleIdCheck} className="btn-id-check">
                  중복 확인
                </button>
              </div>
              {idChecked === true && (
                <p className="validation-msg success-msg">사용 가능한 아이디입니다</p>
              )}
              {idChecked === false && (
                <p className="validation-msg error-msg">사용 불가능한 아이디입니다</p>
              )}
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="form-row">
            <label className="form-label">비밀번호</label>
            <div className="input-container">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력해주세요"
                className="form-input"
                required
              />
            </div>
          </div>

          {/* 비밀번호 확인 */}
          <div className="form-row">
            <label className="form-label">비밀번호 확인</label>
            <div className="input-container">
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder="비밀번호를 한 번 더 입력해주세요"
                className="form-input"
                required
              />
              {isPasswordMatched === true && (
                <p className="validation-msg success-msg">비밀번호가 일치합니다</p>
              )}
              {isPasswordMatched === false && (
                <p className="validation-msg error-msg">비밀번호가 일치하지 않습니다</p>
              )}
            </div>
          </div>

          {/* 전화번호 */}
          <div className="form-row">
            <label className="form-label">전화번호</label>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="전화번호를 입력해주세요"
                className="form-input"
                required
              />
            </div>
          </div>

          {/* 회원가입 제출 버튼 */}
          <div className="form-footer-btn">
            <button type="submit" className="btn-signup-submit">
              회원가입
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default SignupCard;