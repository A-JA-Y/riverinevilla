import API from "./api";

const submitForm = async ({ data }) => {
  try {
    
    // NOTE: this endpoint path is defined by the lead backend, not by this site.
    // It still reads "godrejgolf" from the previous project. Ask the backend team
    // for the Embassy Riverine endpoint and swap it here — leads post to the old
    // bucket until that happens.
    const response = await API.post("/godrejgolf/submit-lead", {...data, source: "embassy-riverinevilla"});

    
    console.log("Form submitted successfully:", response);

    return response;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; 
  }
};

export default submitForm;