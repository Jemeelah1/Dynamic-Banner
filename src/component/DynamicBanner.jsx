import { useState } from "react";
import mk from "../assets/svgs/mk.svg";

export default function DynamicBanner() {
  const [title, setTitle] = useState("My Favorite Game - Mortal Kombat");
  const [description, setDescription] = useState(
    "It’s in our blood, Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!"
  );
  const [image, setImage] = useState(null);
  const [bgColor, setBgColor] = useState("#283E68");

  const handleImageUpload = (e) => {
    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        padding: "60px",
      }}
    >
      {/* Banner */}
      <div
        style={{
          width: "1200px",
          height: "90vh",
          display: "flex",
          position: "relative",
          backgroundColor: bgColor,
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded Banner"
            style={{
              position: "absolute",
              top: "5px",
              right: "40px",
              maxHeight: "250px",
              maxWidth: "500px",
              objectFit: "contain",
              zIndex: 2,
            }}
          />
        ) : (
          <img
            src={mk}
            alt="Default Banner"
            style={{
              position: "absolute",
              top: "5px",
              right: "40px",
              maxHeight: "250px",
              maxWidth: "500px",
              objectFit: "contain",
              zIndex: 2,
            }}
          />
        )}

        <div
          style={{
            padding: "30px",
            textAlign: "left",
            color: "white",
            width: "calc(100% - 250px)",
            flexDirection: "column",
            flexGrow: 2,
            overflow: "hidden",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              maxWidth: "60%",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "16px",
              maxWidth: "68%",
              flexGrow: 2,
              overflowWrap: "break-word",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Customize Form */}
      <div
        style={{
          marginTop: "20px",
          width: "600px",
          padding: "30px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Customize The Banner
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label style={{ fontSize: "18px", fontWeight: "500" }}>
            Banner Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e?.target?.value)}
              style={{
                width: "100%",
                padding: "6px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                resize: "vertical",
              }}
            />
          </label>
          <label style={{ fontSize: "18px", fontWeight: "500" }}>
            Banner Description
            <textarea
              value={description}
              onChange={(e) => {
                const words = e.target.value.split(" ").slice(0, 20).join(" ");
                setDescription(words);
              }}
              style={{
                width: "100%",
                padding: "6px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                minHeight: "80px",
                resize: "vertical",
                fontSize: "12px",
              }}
            />
            <p style={{ textAlign: "right", fontSize: "10px" }}>
              {description?.split(" ").length}/20 words
            </p>
          </label>
          <label style={{ fontSize: "18px", fontWeight: "500" }}>
            Banner Image
            <p
              style={{ fontSize: "10px", fontWeight: "300", color: "#1F1F1F" }}
            >
              File should be in .png .jpg format (up to 5mb)
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                width: "100%",
                padding: "8px",
                border: "2px dotted #000",
                borderRadius: "8px",
                textAlign: "center",
              }}
            />
          </label>

          {/* bg color */}
          <label
            style={{
              fontSize: "18px",
              fontWeight: "500",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            Background Colour
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                width: "220px",
              }}
            >
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e?.target?.value)}
                style={{
                  width: "60px",
                  height: "40px",
                  border: "none",
                  padding: "0",
                  cursor: "pointer",
                  background: "none",
                }}
              />
              <input
                type="text"
                value={bgColor}
                readOnly
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "none",
                  fontSize: "14px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
