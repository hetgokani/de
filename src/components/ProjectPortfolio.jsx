import React from "react";
import { motion } from "framer-motion";

const ProjectPortfolio = () => {
  const colors = {
    primary: "#1A194D",
    accent: "#E6A317",
    white: "#FFFFFF",
    bgLight: "#F8F9FA",
    line: "rgba(26, 25, 77, 0.1)",
    text: "#353378",
  };

  const completed = [
    {
      sn: 1,
      principal: "Sardar Sarovar Narmada Nigam Ltd",
      type: "Pipe Work & Canal Work",
      amount: "10,947.32",
    },
    {
      sn: 2,
      principal: "Public Implementation Unit",
      type: "Building Work",
      amount: "1,919.15",
    },
    {
      sn: 3,
      principal: "Narmada Water Resources",
      type: "Canal Work & RCC, NP3 Pipe Work",
      amount: "5,788.15",
    },
    {
      sn: 4,
      principal: "Gujarat Water Supply & Sewerage Board",
      type: "Pipe Work & RCC Work",
      amount: "72,853.96",
    },
    {
      sn: 5,
      principal: "Gujarat Water Resources Development Corp Ltd",
      type: "PMKSY Irrigation Scheme",
      amount: "7,592.77",
    },
  ];

  const ongoing = [
    {
      sn: 1,
      principal: "Gujarat Water Supply & Sewerage Board",
      type: "Pipe Work & RCC Work",
      amount: "50,078.69",
    },
    {
      sn: 2,
      principal: "Narmada Water Resources",
      type: "Pipe Work & RCC Work",
      amount: "25,404.74",
    },
    {
      sn: 3,
      principal: "Gujarat Council of School Education",
      type: "Building Work",
      amount: "2,766.52",
    },
    {
      sn: 4,
      principal: "Rajkot Urban Development Authority",
      type: "Pipe Work & RCC Work",
      amount: "2,584.57",
    },
  ];

  const TableBlock = ({ title, data, total }) => (
    <div style={{ marginBottom: "60px", width: "100%" }}>
      <h3
        style={{
          fontSize: "clamp(18px, 4vw, 24px)",
          fontWeight: "900",
          color: colors.primary,
          marginBottom: "20px",
          borderLeft: `5px solid ${colors.accent}`,
          paddingLeft: "15px",
          textAlign: "left",
        }}
      >
        {title}{" "}
        <span style={{ fontSize: "12px", opacity: 0.6 }}>(RS. IN LACS)</span>
      </h3>

      {/* Header - Hidden on Mobile */}
      <div
        className="table-header"
        style={{
          display: "flex",
          backgroundColor: colors.primary,
          color: colors.white,
          padding: "15px 20px",
          fontWeight: "bold",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <div style={{ flex: "0.5" }} className="hide-mobile">
          SR.
        </div>
        <div style={{ flex: "2" }}>PRINCIPAL</div>
        <div style={{ flex: "2" }} className="hide-mobile">
          WORK TYPE
        </div>
        <div style={{ flex: "1.5", textAlign: "right" }}>COST</div>
      </div>

      {/* Data Rows */}
      {data.map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "15px 20px",
            borderBottom: `1px solid ${colors.line}`,
            backgroundColor: colors.white,
            alignItems: "center",
            fontSize: "14px",
          }}
          className="responsive-row"
        >
          <div
            style={{ flex: "0.5", fontWeight: "700" }}
            className="hide-mobile"
          >
            {row.sn}
          </div>
          <div style={{ flex: "2", fontWeight: "700", paddingRight: "10px" }}>
            {row.principal}
          </div>
          <div style={{ flex: "2", opacity: 0.8 }} className="hide-mobile">
            {row.type}
          </div>
          <div
            style={{
              flex: "1.5",
              textAlign: "right",
              fontWeight: "800",
              color: colors.primary,
            }}
          >
            {row.amount}
          </div>
        </div>
      ))}

      {/* Total Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "rgba(230, 163, 23, 0.1)",
          borderRadius: "0 0 8px 8px",
          borderTop: `2px solid ${colors.accent}`,
        }}
      >
        <div style={{ fontWeight: "900", color: colors.primary }}>
          TOTAL VALUE
        </div>
        <div
          style={{
            fontWeight: "900",
            color: colors.accent,
            fontSize: "1.2rem",
          }}
        >
          {total}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .responsive-row { font-size: 13px !important; }
        }
      `}</style>
    </div>
  );

  return (
    <section
      style={{
        backgroundColor: colors.bgLight,
        padding: "80px 5%",
        fontFamily: '"Montserrat", sans-serif',
        minHeight: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(35px, 8vw, 70px)",
              fontWeight: "900",
              color: colors.primary,
              lineHeight: "1.1",
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Financial <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `1.5px ${colors.primary}`,
              }}
            >
              Records
            </span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: colors.accent,
              margin: "20px auto",
            }}
          ></div>
        </div>

        <TableBlock
          title="SUCCESSFULLY COMPLETED"
          data={completed}
          total="99,101.35"
        />
        <TableBlock
          title="CURRENT WORK ON HAND"
          data={ongoing}
          total="80,834.52"
        />
      </motion.div>
    </section>
  );
};

export default ProjectPortfolio;
