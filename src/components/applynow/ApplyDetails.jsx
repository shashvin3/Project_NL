import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import Radio from "../common/Radio";
import Input from "../common/Input";
import Toast from "../common/Toast";
import useToast from "../hooks/useToast";
import { supabase } from "../../supabaseClient";

function ApplyDetails() {
  const navigate = useNavigate();
  const { toast, showToast, hideToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    schoolName: "",
    classGrade: "",
    pincode: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    parentName: "",
    });
  const [docFile, setDocFile] = useState(null);
  const [pinError, setPinError] = useState("");

  // function to fetch data using pincode
  const fetchLocation = async (pin) => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`,
      );
      const data = await response.json();
      if (data[0].Status === "Success") {
        const details = data[0].PostOffice[0];
        setFormData((prev) => ({
          ...prev,
          city: details.District,
          state: details.State,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          city: "",
          state: "",
        }));
        setPinError("Pincode not found. Please check and try again.");
      }
    } catch (error) {
      console.error("Error fetchinh data:", error);
    } finally {
      console.log("fetched or handeled");
    }
  };
  useEffect(() => {
    if (formData.pincode.length === 6) {
      fetchLocation(formData.pincode);
    }
  }, [formData.pincode]);

  const handlePinChange = (e) => {
    setFormData({ ...formData, pincode: e.target.value });
    setPinError("");
    if (errors.pincode) {
      setErrors((prev) => ({ ...prev, pincode: "" }));
    }
  };

  //validation for mandatory fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First Name can only contain letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Last Name can only contain letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is mandatory";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is mandatory";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.dob) newErrors.dob = "Date of Birth is mandatory";

    if (!formData.classGrade.trim()) {
      newErrors.classGrade = "Class is mandatory";
    } else if (
      !/^([6-9]|1[0-2])(th|st|nd|rd)?$|^(UG|PG|Graduation|undergraduate)$/i.test(
        formData.classGrade.trim(),
      )
    ) {
      newErrors.classGrade =
        "Enter a valid class (6th to 12th, or Graduation/UG)";
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School/College name is mandatory";
    } else if (!/^[a-zA-Z0-9\s\-\.,'&]+$/.test(formData.schoolName.trim())) {
      newErrors.schoolName = "Enter a valid school/college name";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is mandatory";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.state.trim())) {
      newErrors.state = "State name can only contain letters";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city.trim())) {
      newErrors.city = "City name can only contain letters";
    }

    if (
      formData.parentName.trim() &&
      !/^[a-zA-Z\s]+$/.test(formData.parentName.trim())
    ) {
      newErrors.parentName = "Parent Name can only contain letters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Phone verification & Email Verification
  const [phoneStep, setPhoneStep] = useState("idle");
  const [otpValue, setOtpValue] = useState("");
  const [emailStep, setEmailStep] = useState("idle");
  const [emailOtp, setEmailOtp] = useState("");

  const handlePhoneSendOtp = () => {
    setPhoneStep("sending");
    setTimeout(() => {
      setPhoneStep("typing");
      alert("Your otp is 123456");
    }, 1500);
  };

  const handlePhoneVerifyOtp = () => {
    if (otpValue === "123456") {
      setPhoneStep("verified");
    } else {
      alert("Invalid Phone OTP!");
    }
  };

  const handleEmailSendOtp = () => {
    setEmailStep("sending");
    setTimeout(() => {
      setEmailStep("typing");
      alert("Your otp is 654321");
    }, 1500);
  };

  const handleEmailVerifyOtp = () => {
    if (emailOtp === "654321") {
      setEmailStep("verified");
    } else {
      alert("Invalid Email OTP!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const fileHandle = (e) => {
    const file = e.target.files[0];
    const allowed = ["image/jpeg", "image/png", "application/pdf"];
    if (file && !allowed.includes(file.type)) {
      showToast("Only JPG, PNG, or PDF files are allowed.", "warning");
      e.target.value = "";
      return;
    }
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
      showToast("File size must be under 2MB.", "warning");
      e.target.value = "";
      return;
    }
    setDocFile(file);
  };

  // for uploading document to supabase
  const uploadToSupabase = async (docFile) => {
    if (!docFile) return null;
    const fileName = `${Date.now()}_${docFile.name}`; //create a unique name - timestamp_filename
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(`doc_proofs/${fileName}`, docFile);

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from("documents")
      .getPublicUrl(`doc_proofs/${fileName}`);

    return urlData.publicUrl;
  };

  //for submitting form
  const handleRegister = async (e) => {
    e.preventDefault();
    //Validation for mandatory fields
    if (!validateForm()) {
      showToast("Please fill all mandatory fields.", "warning");
      return;
    }
    //Validation for T&C
    if (!isAgreed) {
      showToast("Please agree to the Terms and Conditions.", "warning");
      return;
    }
    // Validation for Mobile and Email
    if (phoneStep !== "verified" || emailStep !== "verified") {
      showToast("Please verify your Mobile and Email first!", "warning");
      return;
    }
    // Verification for DOB
    const birthDate = new Date(formData.dob);
    const today = new Date();
    // Calculating the Age
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    // Future Date cannot be DOB
    if (birthDate > today) {
      showToast("Date of Birth cannot be in the future.", "error");
      return;
    }
    if (age < 10) {
      showToast("Student must be at least 10 years old to register.", "error");
      return;
    }

    // Validation for File Check if user entered file
    if (!docFile) {
      showToast("Please upload your ID Proof document.", "warning");
      return;
    }

    try {
      setIsSubmitting(true); 
      const docUrl = await uploadToSupabase(docFile);
      // Inserting into applicants table in the supabase
      const { data, error } = await supabase
        .from("applicants")
        .insert([
          {
            ...formData,
            id_proofs: docUrl,
            payment_status: "pending",
          },
        ])
        .select(); //.select() is added so that we can get the returned ID for payment redirection

      if (error) throw error;

      //now it will Redirect to Payment Page
      // const newId = data[0].id; // Passed the unique ID so the payment page can know who it is paying
      navigate(`/payment/${formData.phone}`);
    } catch (error) {
      console.error("Error adding documents: ", error.message);
      showToast("Submission failed: " + error.message, "error");
    }
    finally {
     setIsSubmitting(false); 
    }
  };

  return (
    <section>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
      {/* Header Part */}
      <div className="text-center mb-6 space-y-4">
        <img
          src={logo}
          alt="NavLakshya Logo"
          className="w-38 md:w-48 mx-auto"
        />
        <div className="text-blue-900 font-bold bg-yellowone rounded-full py-2 px-6 inline-block leading-wider">
          All India Bright Minds Scholarship Program 2026
        </div>
      </div>

      {/* Highlight Part */}
      <div className="grid md:grid-cols-2 justify-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-yellow-500"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
          <span className="text-blue-900 font-bold">
            Scholarship Pool :{" "}
            <span className="text-blue-900 font-normal">Up to </span>
            <span className="text-red-800 font-bold">₹5,00,000</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-blue-800"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span className="text-blue-900 font-bold">Certificate</span>
          <span className="text-blue-900">for All Participants</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-800 w-8 h-8 "
          >
            <rect x="4" y="3" width="14" height="18" rx="2" />
            <line x1="7" y1="7" x2="15" y2="7" />
            <line x1="7" y1="11" x2="13" y2="11" />
            <path d="M8 15l2 2 3-3" />
            <circle cx="18" cy="17" r="3" />
            <path d="M18 15v2l1 1" />
          </svg>
          <span className="text-blue-900 font-bold">Top Prizes:</span>
          <span className="text-yellow-500">₹1,00,000</span>
        </div>
      </div>

      <form>
        {/* Student Details */}
        <div className="grid md:grid-cols-2">
          <h2 className="bg-blueone text-white text-lg font-bold font-jakarta px-4 py-2 rounded-t-xl rounded-bl-xl flex w-full mb-3">
            Student Details
          </h2>
          <div className="bg-yellowone h-1 md:block hidden mt-5"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name *"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            label="Last Name *"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <Input
            label="Date of Birth *"
            name="dob"
            type="date"
            value={formData.dob}
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            error={errors.dob}
          />
          <div>
            <label className="block mb-1 text-sm font-medium">Gender</label>
            <div className="flex gap-4">
              <Radio
                label="Male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <Radio
                label="Female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <Radio
                label="Other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </div>
          </div>
          <Input
            label="Class / Grade *"
            name="classGrade"
            value={formData.classGrade}
            onChange={handleChange}
            error={errors.classGrade}
          />
          <Input
            label="School / College Name *"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            error={errors.schoolName}
          />
          <Input
            label="State *"
            value={formData.state}
            name="state"
            onChange={handleChange}
            error={errors.state}
          />
          <Input
            label="City *"
            value={formData.city}
            name="city"
            onChange={handleChange}
            error={errors.city}
          />
          <div>
            <Input
              label="Pincode *"
              name="pincode"
              value={formData.pincode}
              onChange={handlePinChange}
              error={errors.pincode}
            />
            {pinError && <p className="text-xs text-red-500">{pinError}</p>}
          </div>
        </div>

        {/* Contact + Document Detail*/}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {/* contact */}
          <div className="space-y-2">
            <h2 className="bg-blueone text-white text-lg font-bold font-jakarta px-4 py-2 rounded-t-xl rounded-bl-xl flex w-full mb-3">
              Contact Details
            </h2>
            <Input
              label="Parent Name"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              error={errors.parentName}
            />
            {/* Phone Verification Part */}
            <div className="relative">
              <Input
                label="Mobile Number *"
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={(e) => {
                  const newPhone = e.target.value;
                  setFormData({ ...formData, phone: newPhone });
                  if (errors.phone)
                    setErrors((prev) => ({ ...prev, phone: "" }));
                  if (phoneStep === "verified") setPhoneStep("idle"); // ← only reset if was verified
                }}
                // disabled={phoneStep === "verified"}
                error={errors.phone}
              />
              {/^[6-9]\d{9}$/.test(formData.phone) && phoneStep === "idle" && (
                <button
                  type="button"
                  onClick={handlePhoneSendOtp}
                  className="absolute right-4 top-10 text-red-500 font-bold text-xs hover:underline"
                >
                  VERIFY
                </button>
              )}

              {/* Verified will appear */}
              {phoneStep === "verified" && (
                <span className="absolute right-4 top-10 text-green-600 font-bold text-xs">
                  VERIFIED
                </span>
              )}

              {/* For OTP Input Box */}
              {phoneStep === "typing" && (
                <div className="mt-2 flex gap-2 animate-in fade-in duration-500">
                  <input
                    className="flex-1 border border-blueone rounded-lg p-2 text-sm outline-none bg-blue-50"
                    placeholder="Enter 6-digit OTP"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  <button
                    onClick={handlePhoneVerifyOtp}
                    className="bg-blueone text-white px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
            {/* Email Verification Part */}
            <div className="relative">
              <Input
                label="Email ID *"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                  onChange={(e) => {
                    handleChange(e);
                    if (emailStep === "verified") setEmailStep("idle");
                  }}
                // disabled={emailStep==="verified"}
                error={errors.email}
              />
              {formData.email?.length > 10 && emailStep === "idle" && (
                <button
                  type="button"
                  onClick={handleEmailSendOtp}
                  className="absolute right-4 top-10 font-bold text-xs text-red-500 hover:underline"
                >
                  VERIFY
                </button>
              )}
              {emailStep === "verified" && (
                <span className="absolute right-4 top-10 text-xs text-green-600 font-bold">
                  VERIFIED
                </span>
              )}
              {emailStep === "typing" && (
                <div className="mt-2 flex gap-2">
                  <input
                    className="flex-1 border border-blueone rounded-lg p-2 text-sm outline-none bg-blue-50"
                    placeholder="Enter Email OTP"
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                  />
                  <button
                    onClick={handleEmailVerifyOtp}
                    className="bg-blueone text-white px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* document */}
          <div>
            <h2 className="bg-blueone text-white text-lg font-bold font-jakarta px-4 py-2 rounded-t-xl rounded-bl-xl flex w-full mb-3">
              Document Upload
            </h2>
            <Input
              label="Choose File *"
              type="file"
              onChange={fileHandle}
              className="w-full border rounded-lg px-3 py-2 file:bg-blue-600 file:text-white file:px-4 file:py-1 file:rounded-md file:border-0 file:mr-4"
            ></Input>
            <div className="bg-yellow-400 rounded-xl p-2 mt-4 text-center font-semibold">
              Registration Fee: ₹500
              <span className="block">(Non-Refunable)</span>
            </div>
          </div>
        </div>
      </form>

      {/* Footer Part  */}
      <div className="mt-8 text-center space-y-4">
        <div className="flex items-start gap-2 justify-center text-sm">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="mt-2"
          />
          <span className="text-lg font-semibold text-left">
            I hereby confirm that all the details provided are correct.I agree
            to the <span className="text-blueone">terms and conditions</span> of
            the{" "}
            <span className="text-blueone">NavLakshya Scholarship Program</span>
            .
          </span>
        </div>

        <button
          type="button"
          onClick={handleRegister}
          disabled={isSubmitting}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-xl text-md md:text-2xl text-blue-800 font-bold max-w-xl"
        >
        {isSubmitting ? "Submitting..." : (
         <><span className="font-extrabold">Register Now</span> & Unlock Your
          Scholarship Opportunity🚀</> )}
        </button>

        <p className="text-red-500 text-sm">
          ⚠ Limited Seats per School - Register Now
        </p>
      </div>
    </section>
  );
}

export default ApplyDetails;
