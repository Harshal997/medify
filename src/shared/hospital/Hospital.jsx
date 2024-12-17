import React, { useState } from "react";
import styles from "./hospital.module.css";
import hospital_real from "../../assets/hospital-real.png";
import { FaThumbsUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timings = [
  { mer: "morning", slots: ["11:30 AM"] },
  {
    mer: "afternoon",
    slots: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  },
  { mer: "evening", slots: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"] },
];

const slots = [
  { date: "Today", available: 11 },
  { date: "Tomorrow", available: 17 },
  { date: "Thur, 19 Dec", available: 11 },
  // Add more slots as needed
];

const Hospital = ({ data, booking }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [timeslot, setTimeslot] = useState("");
  const [expand, setExpand] = useState(false);
  const handleBooking = () => {
    if (!expand) {
      setExpand(true);
      return;
    } else if (date && timeslot) {
      const existingBookings = localStorage.getItem("bookings");
      const bookings = existingBookings ? JSON.parse(existingBookings) : [];
      localStorage.setItem(
        "bookings",
        JSON.stringify([...bookings, { ...data, date, timeslot }])
      );
      setExpand(false);
      alert("Booked Successfully!");
    }
    console.log("check", [{ ...data, date, timeslot }]);
    setExpand(false);
    // alert("Booked Successfully!");
  };
  console.log("hos", data);
  return (
    <div
      key={data["Provider ID"]}
      className={styles.container}
      style={{ height: expand ? "35em" : "18em" }}
    >
      <div className={styles.detailContainer}>
        <div className={styles.imgContainer}>
          <img src={hospital_real} alt="hospital-image" />
        </div>
        <div>
          <h4 className={styles.name}>{data["Hospital Name"]}</h4>
          <div>
            <p className={styles.city}>
              {data.City}, {data.State}
            </p>
            <p className={styles.address}>{data.Address}</p>
          </div>
          {!booking && (
            <p>
              <span style={{ color: "#02A401", fontWeight: "700" }}>Free</span>{" "}
              <span
                style={{ color: "#787887", textDecoration: "line-through" }}
              >
                ₹500
              </span>{" "}
              Consultation fee at clinic
            </p>
          )}
          <div className={styles.rating}>
            <span>
              <FaThumbsUp /> {data["Hospital overall rating"]}
            </span>
          </div>
        </div>
        {booking && (
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "12px" }}
          >
            <div className={styles.timeslot}>{data.timeslot}</div>
            <div
              className={styles.timeslot}
              style={{ color: "#007100", border: "1px solid #00A500" }}
            >
              {data.date}
            </div>
          </div>
        )}
      </div>
      {!booking && (
        <div className={styles.bookBtn}>
          <button onClick={(data) => handleBooking(data)}>
            Book FREE Center Visit
          </button>
        </div>
      )}
      {expand && (
        <>
          {/* <div className={styles.slotsDateContainer}>
            <span className={styles.slotDetails}>
              <span>Today</span>
              <span className={styles.availableSlotText}>
                11 Slots Available
              </span>
            </span>
            <span className={styles.slotDetails}>
              <span>Tomorrow</span>
              <span className={styles.availableSlotText}>
                17 Slots Available
              </span>
            </span>
            <span className={styles.slotDetails}>
              <span>Thur, 19 Dec</span>
              <span className={styles.availableSlotText}>
                11 Slots Available
              </span>
            </span>
          </div> */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {slots.map((slot, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slotDetails}>
                  <span>{slot.date}</span>
                  <span className={styles.availableSlotText}>
                    {slot.available} Slots Available
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.timingsContainer}>
            {timings.map((timing) => (
              <div className={styles.slotsContainer}>
                <span>{timing.mer}</span>
                <div className={styles.slotContainer}>
                  {timing.slots.map((slot) => (
                    <span
                      onClick={(e) => setTimeslot(e.target.innerText)}
                      className={
                        slot === timeslot
                          ? styles.timeslotSelect
                          : styles.timeslot
                      }
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hospital;
