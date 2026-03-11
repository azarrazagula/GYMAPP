// Using Firebase REST API instead of SDK
const FIREBASE_DATABASE_URL =
  "https://http-bfc51-default-rtdb.asia-southeast1.firebasedatabase.app";

export const submitFormData = async (formData) => {
  console.log("=== FORM SUBMISSION STARTED ===");
  console.log("Form Data:", formData);

  // Validate required fields are not empty
  const requiredFields = [
    "name",
    "email",
    "phone",
    "location",
    "fitnessGoal",
    "experience",
  ];
  const isEmpty = requiredFields.some(
    (field) => !formData[field] || !formData[field].toString().trim(),
  );

  if (isEmpty) {
    throw new Error(
      "Cannot submit empty form. All required fields must be filled.",
    );
  }

  try {
    const dataToSubmit = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    console.log("Data to Submit:", dataToSubmit);

    // Using Firebase REST API with .json endpoint
    const url = `${FIREBASE_DATABASE_URL}/submitForm.json`;
    console.log("📤 Request Details:");
    console.log("   URL:", url);
    console.log("   Method: POST");
    console.log("   Body:", JSON.stringify(dataToSubmit));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    console.log("📥 Response Received:");
    console.log("   Status Code:", response.status);
    console.log("   Status OK:", response.ok);
    console.log("   Headers:", {
      contentType: response.headers.get("content-type"),
    });

    let result;
    try {
      result = await response.json();
      console.log("   Response Body:", result);
    } catch (e) {
      console.log("   Could not parse response as JSON");
      result = null;
    }

    if (!response.ok) {
      console.error("❌ Firebase Request Failed!");
      console.error("   Status:", response.status);
      console.error("   Response:", result);
      throw new Error(
        `HTTP ${response.status} - ${result?.error || "Unknown error"}`,
      );
    }

    if (!result || !result.name) {
      console.error("❌ Invalid response format");
      console.error("   Expected: {name: 'xxxxx'}");
      console.error("   Got:", result);
      throw new Error("Firebase returned invalid response");
    }

    console.log("✅ Form successfully submitted!");
    console.log("   ID:", result.name);
    console.log("=== SUBMISSION COMPLETE ===");

    return { success: true, id: result.name };
  } catch (error) {
    console.error("❌ SUBMISSION ERROR:");
    console.error("   Error:", error.message);
    console.error("   Stack:", error.stack);
    console.log("=== SUBMISSION FAILED ===");
    throw error;
  }
};

export const getFormData = async () => {
  const url = `${FIREBASE_DATABASE_URL}/submitForm.json`;

  console.log("📥 Fetching data from Firebase...");
  console.log("URL:", url);

  const response = await fetch(url);

  console.log("Status:", response.status);

  const data = await response.json();
  console.log("Firebase Data:", data);

  return data;
};
