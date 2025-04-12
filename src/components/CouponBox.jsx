import React, { useEffect } from "react";
import couponStore from "../stores/CouponStore";

const CouponBox = () => {
  const { count, increase, decrease } = couponStore();

  useEffect(() => {
    let lastTouchEnd = 0;

    const preventDoubleTapZoom = e => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("touchend", preventDoubleTapZoom, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchend", preventDoubleTapZoom);
    };
  }, []);

  return (
    <div className="main">
      <div>
        <div className="daldal-cafe">
          <div>
            <div className="menu-div">
              <img className="menu" alt="menu" src="/images/menu.png" />
            </div>
          </div>
          <div>
            <div className="logo-div">
              <img className="logo" alt="logo" src="/images/logo2.png" />
            </div>

            <div className="coupon-div">
              <div className="coupon-div-align">
                <div className="coupon-info">
                  <div>
                    <span className="font-bold">Mobile.</span> 010-1234-5678
                  </div>
                  <div>
                    <span className="font-bold">kakaoID.</span> daldalCafe
                  </div>
                  <div>
                    <span className="font-bold">Instagram.</span> @daldal
                  </div>
                  <div>
                    <span className="font-bold">Add.</span> 경기도 안양시 평촌동
                    123-45
                  </div>
                  <div>
                    <span className="font-bold">국민은행</span>{" "}
                    1234567-01-1234567
                  </div>
                </div>

                <div className="coupon">
                  {/* 항상 10칸 생성 */}
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="stamp">
                      {index < count && (
                        <img
                          className="stamp-img"
                          alt="stamp"
                          src="/images/aa.png"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button onClick={increase}>적립</button>
          <button onClick={decrease}>적립취소</button>
        </div>
      </div>
    </div>
  );
};

export default CouponBox;
