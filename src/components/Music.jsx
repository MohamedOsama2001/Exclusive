import React, { useEffect, useState } from "react";

function Music() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const endDate = new Date("Jan 31, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = endDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section>
        <div
          className="container my-5"
          style={{ backgroundColor: "#1b1b1b", padding: "30px" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-white">
                <p className="text-success">Categories</p>
                <h1>Enhance Your Music Experience</h1>
                <div className="d-flex justify-content-start my-5">
                  {["days", "hours", "minutes", "seconds"].map(
                    (unit, index) => (
                      <div
                        key={index}
                        className="time-box mx-2 text-center p-2 bg-white text-dark"
                      >
                        <span className="d-block display-4">
                          {timeLeft[unit] < 10
                            ? `0${timeLeft[unit]}`
                            : timeLeft[unit]}
                        </span>
                        <small>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </small>
                      </div>
                    )
                  )}
                </div>
                <button className="btn btn-success btn-lg">Buy Now!</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src={"./assets/music.png"}
                alt="Speaker"
                className="product-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Music;
