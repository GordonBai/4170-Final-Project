import { useState } from "react";
import "./PreferenceQuestions.css";

function PreferenceQuestions() {
  const [groupSize, setGroupSize] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulated submit (no backend)
  const handleSubmit = () => {
    // Simple interaction check
    if (!groupSize || !atmosphere || !location || !time) {
      alert("Please answer all questions before continuing.");
      return;
    }

    setLoading(true);

    // Fake async action to simulate saving
    setTimeout(() => {
      console.log({
        groupSize,
        atmosphere,
        location,
        time,
      });

      alert("Preferences recorded successfully.");

      // Reset state
      setGroupSize("");
      setAtmosphere("");
      setLocation("");
      setTime("");
      setLoading(false);
    }, 600); // short delay so loading state is visible
  };

  return (
    <div className="preference">
      <div className="preference-header">
        <h1 className="preference-title">Preference Questions</h1>
      </div>

      <div className="preference-content">
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
