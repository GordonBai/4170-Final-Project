import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./PreferenceQuestions.css";

function PreferenceQuestions() {
  const navigate = useNavigate();
  const [groupSize, setGroupSize] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Save preferences to Firebase Firestore
  const handleSubmit = async () => {
    // Validation check
    if (!groupSize || !atmosphere || !location || !time) {
      setError("Please answer all questions before continuing.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Check if db is initialized
      if (!db) {
        throw new Error("Firebase database is not initialized");
      }

      // Create preference data object
      const preferenceData = {
        groupSize,
        atmosphere,
        location,
        time,
        createdAt: serverTimestamp(),
      };

      // Add document to 'preferences' collection in Firestore
      const docRef = await addDoc(collection(db, "preferences"), preferenceData);
      
      setSuccess("Preferences recorded successfully!");
      alert("Preferences recorded successfully.");

      // Navigate back to dashboard after 1.5 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      console.error("Error saving preferences:", err);
      
      // Check for specific error types
      let errorMessage = "Failed to save preferences. Please try again.";
      
      if (err.code === "permission-denied") {
        errorMessage = "Permission denied. Please check Firestore security rules.";
      } else if (err.code === "unavailable" || err.message?.includes("connection") || err.message?.includes("timeout")) {
        errorMessage = "Connection error. Please check your internet connection and Firestore security rules.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(`Error: ${errorMessage}`);
      setSuccess("");
      alert(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="preference">
      <div className="preference-header">
        <h1 className="preference-title">Preference Questions</h1>
      </div>

      <div className="preference-content">
        {error && (
          <div className="preference-error" style={{ color: "red", marginBottom: "20px", padding: "10px", backgroundColor: "#ffebee", borderRadius: "5px" }}>
            {error}
          </div>
        )}
        {success && (
          <div className="preference-success" style={{ color: "green", marginBottom: "20px", padding: "10px", backgroundColor: "#e8f5e9", borderRadius: "5px", fontWeight: "bold" }}>
            ✅ {success}
          </div>
        )}

        <Section
          title="Desired Study Group Size"
          name="groupSize"
          value={groupSize}
          onChange={setGroupSize}
          options={[
            ["Small", "Small (2–3)"],
            ["Medium", "Medium (3–5)"],
            ["Large", "Large (6+)"],
          ]}
        />

        <Section
          title="Preferred Study Atmosphere"
          name="atmosphere"
          value={atmosphere}
          onChange={setAtmosphere}
          options={["Focused", "Social", "Mixed"]}
        />

        <Section
          title="Where do you usually study?"
          name="location"
          value={location}
          onChange={setLocation}
          options={[
            ["Morningside", "Morningside Campus"],
            ["CUIMC", "CUIMC Campus"],
            ["Online", "Online"],
          ]}
        />

        <Section
          title="Studying Time Period"
          name="time"
          value={time}
          onChange={setTime}
          options={["Morning", "Afternoon", "Night", "Midnight"]}
        />

        <button
          className="preference-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </div>
    </div>
  );
}

// Reusable radio group
function Section({ title, name, value, onChange, options }) {
  return (
    <div className="preference-section">
      <h3>{title}</h3>
      {options.map((opt) => {
        const [val, label] = Array.isArray(opt) ? opt : [opt, opt];
        return (
          <label key={val} className="preference-option">
            <input
              type="radio"
              name={name}
              checked={value === val}
              onChange={() => onChange(val)}
            />
            {label}
          </label>
        );
      })}
    </div>
  );
}

export default PreferenceQuestions;
