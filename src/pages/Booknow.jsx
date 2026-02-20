import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider,
  Fade,
  Zoom,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Stepper,
  Step,
  StepLabel,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";
import {
  Person,
  Email,
  Phone,
  Home,
  Work,
  FamilyRestroom,
  BeachAccess,
  Cake,
  Flight,
  Hotel,
  Restaurant,
  LocationOn,
  DateRange,
  Group,
} from "@mui/icons-material";

const Booknow = () => {
  const [travelType, setTravelType] = useState("");
//   page changing state it define as a step 1st, 2n, 3rd steps
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",

    // College specific
    collegeName: "",
    studentId: "",
    Department: "",
    yearOfStudy: "",
    purposeOfTrip: "",

    // Office specific
    companyName: "",
    employeeId: "",
    designation: "",
    businessPurpose: "",

    // Family specific
    familyMembers: "",
    familyRelation: "",
    specialAccommodation: "",

    // Honeymoon specific
    spouseName: "",
    weddingDate: "",
    anniversaryDate: "",
    romanticPackage: "",

    // Common fields
    travelDate: "",
    returnDate: "",
    numberOfTravelers: "1",
    accommodation: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const travelTypes = [
    { value: "college", label: "College Trip" },
    { value: "office", label: "Office Travel" },
    { value: "family", label: "Family Trip" },
    { value: "honeymoon", label: "Honeymoon" },
    { value: "personal", label: "Gang Trip" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTravelTypeChange = (e) => {
    setTravelType(e.target.value);
    setStep(1);
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.travelDate) newErrors.travelDate = "Travel date is required";
    if (!formData.returnDate) newErrors.returnDate = "Return date is required";

    // Type-specific validation
    if (travelType === "college") {
      if (!formData.collegeName)
        newErrors.collegeName = "College name is required";
      if (!formData.studentId) newErrors.studentId = "Student ID is required";
      if (!formData.course) newErrors.course = "Course is required";
    } else if (travelType === "office") {
      if (!formData.companyName)
        newErrors.companyName = "Company name is required";
      if (!formData.employeeId)
        newErrors.employeeId = "Employee ID is required";
      if (!formData.designation)
        newErrors.designation = "Designation is required";
    } else if (travelType === "family") {
      if (!formData.familyMembers)
        newErrors.familyMembers = "Number of family members is required";
    } else if (travelType === "honeymoon") {
      if (!formData.spouseName)
        newErrors.spouseName = "Spouse name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSnackbar({
        open: true,
        message: "Booking submitted successfully!",
        severity: "success",
      });
      console.log("Form Data:", formData);
    } else {
      setSnackbar({
        open: true,
        message: "Please fill all required fields",
        severity: "error",
      });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderCollegeFields = () => (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="collegeName"
          label="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.collegeName}
          helperText={errors.collegeName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="location"
          label="Location"
          value={formData.studentId}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.studentId}
          helperText={errors.studentId}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="department"
          label="Department"
          value={formData.course}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.course}
          helperText={errors.course}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth size="small">
          <InputLabel>Year of Study</InputLabel>
          <Select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            label="Year of Study"

          >
            <MenuItem value="1st">1st Year</MenuItem>
            <MenuItem value="2nd">2nd Year</MenuItem>
            <MenuItem value="3rd">3rd Year</MenuItem>
            <MenuItem value="4th">4th Year</MenuItem>
            <MenuItem value="postgraduate">Postgraduate</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );

  const renderOfficeFields = () => (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="companyName"
          label="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.companyName}
          helperText={errors.companyName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="location"
          label="Location"
          value={formData.employeeId}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.employeeId}
          helperText={errors.employeeId}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="designation"
          label="Designation"
          value={formData.designation}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.designation}
          helperText={errors.designation}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="industry"
          label="Industry"
          value={formData.businessPurpose}
          onChange={handleChange}
          size="small"
          multiline
          rows={1}
        />
      </Grid>   
    </>
  );

  const renderFamilyFields = () => (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="familyMembers"
          label="Number of Family Members"
          type="number"
          value={formData.familyMembers}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.familyMembers}
          helperText={errors.familyMembers}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormControl fullWidth size="small">
          <InputLabel>Family Type</InputLabel>
          <Select
            name="familyRelation"
            value={formData.familyRelation}
            onChange={handleChange}
            label="Family Type"
            sx={{width:{xs:"100%", md:"200px"}}}
          >
            <MenuItem value="nuclear">Nuclear Family</MenuItem>
            <MenuItem value="joint">Joint Family</MenuItem>
            <MenuItem value="extended">Extended Family</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" variant="standard">
          <Typography variant="caption" color="textSecondary">
            Special Accommodation Needed?
          </Typography>
          <RadioGroup
            row
            name="specialAccommodation"
            value={formData.specialAccommodation}
            onChange={handleChange}
            
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );

  const renderHoneymoonFields = () => (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="spouseName"
          label="Spouse Name"
          value={formData.spouseName}
          onChange={handleChange}
          size="small"
          required
          error={!!errors.spouseName}
          helperText={errors.spouseName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="weddingDate"
          label="Wedding Date"
          type="date"
          value={formData.weddingDate}
          onChange={handleChange}
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth size="small">
          <InputLabel>Romantic Package</InputLabel>
          <Select
            name="romanticPackage"
            value={formData.romanticPackage}
            onChange={handleChange}
            label="Romantic Package"
            sx={{width:{xs:"100%", md:"200px"}}}

          >
            <MenuItem value="standard">Standard Romance</MenuItem>
            <MenuItem value="deluxe">Deluxe Romance</MenuItem>
            <MenuItem value="premium">
              Premium Romance with Candlelight Dinner
            </MenuItem>
            <MenuItem value="luxury">Luxury Honeymoon Suite</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );

  return (
    <>
      <Container maxWidth="md" sx={{ fontFamily:"poppins" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "poppins, sans serif",
              textAlign: "center",
              mb: 3,
              color: "#4290e9",
              fontWeight: 600,
            }}
          >
            Welcome! Book Your Travel
          </Typography>

          <Stepper activeStep={step} sx={{ mb: 4 }}>
            <Step>
              <StepLabel sx={{fontFamily:"poppins"}}>Select Travel Type</StepLabel>
            </Step>
            <Step>
              <StepLabel sx={{fontFamily:"poppins"}}>Personal Details</StepLabel>
            </Step>
            <Step>
              <StepLabel sx={{fontFamily:"poppins"}}>Travel Details</StepLabel>
            </Step>
          </Stepper>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* Step 1: Travel Type Selection */}
            {step === 0 && (
              <Fade in={true}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "poppins" }}
                  >
                    What kind of trip are you planning?
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    {travelTypes.map((type) => (
                      <Grid item xs={12} sm={6} key={type.value}>
                        <Box
                          sx={{
                            cursor: "pointer",
                            mt:3,
                            border:
                              travelType === type.value
                                ? "2px solid #4290e9"
                                : "1px solid #e0e0e0",
                            transition: "all 0.3s ease",
                
                            borderRadius:"10px",
                            fontSize:"12px",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: 3,
                              borderColor: "#FF6B6B",
                            },
                          }}
                          onClick={() =>
                            handleTravelTypeChange({
                              target: { value: type.value },
                            })
                          }
                        >
                          <CardContent sx={{ textAlign: "center",}}>
                            <Typography variant="h6"sx={{fontFamily:"poppins", fontSize:"15px", }}>{type.label}</Typography>
                          </CardContent>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      disabled={!travelType}
                      sx={{
                        bgcolor: "#4290e9",
                        "&:hover": { bgcolor: "#FF6B6B" },
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}

            {/* Step 2: Personal Details */}
            {step === 1 && (
              <Fade in={true}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "poppins" }}
                  >
                    Personal Information
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth defaultValue="Male" size="small">
                        <InputLabel>Gender</InputLabel>
                        <Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          label="Gender"
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.phone}
                        helperText={errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="city"
                        label="City"
                        value={formData.city}
                        onChange={handleChange}
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="address"
                        label="Address"
                        value={formData.address}
                        onChange={handleChange}
                        size="small"
                        multiline
                        rows={2}
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "poppins" }}
                  >
                    Trip Specific Details
                  </Typography>

                  <Grid container spacing={2}>
                    {travelType === "college" && renderCollegeFields()}
                    {travelType === "office" && renderOfficeFields()}
                    {travelType === "family" && renderFamilyFields()}
                    {travelType === "honeymoon" && renderHoneymoonFields()}
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                    }}
                  >
                    <Button onClick={handleBack} variant="outlined">
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        bgcolor: "#4290e9",
                        "&:hover": { bgcolor: "#FF6B6B" },
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}

            {/* Step 3: Travel Details */}
            {step === 2 && (
              <Fade in={true}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "poppins" }}
                  >
                    Travel Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="travelDate"
                        label="Travel Date"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.travelDate}
                        helperText={errors.travelDate}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DateRange />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="returnDate"
                        label="Return Date"
                        type="date"
                        value={formData.returnDate}
                        onChange={handleChange}
                        size="small"
                        required
                        error={!!errors.returnDate}
                        helperText={errors.returnDate}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="numberOfTravelers"
                        label="Number of Travelers"
                        type="number"
                        value={formData.numberOfTravelers}
                        onChange={handleChange}
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Group />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth size="small">
                        <InputLabel>Accommodation Type</InputLabel>
                        <Select
                          name="accommodation"
                          value={formData.accommodation}
                          onChange={handleChange}
                          label="Accommodation Type"
                        >
                          <MenuItem value="hotel">Hotel</MenuItem>
                          <MenuItem value="resort">Resort</MenuItem>
                          <MenuItem value="homestay">Homestay</MenuItem>
                          <MenuItem value="apartment">Apartment</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="specialRequests"
                        label="Special Requests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        size="small"
                        multiline
                        rows={3}
                        placeholder="Any special requirements or requests..."
                      />
                    </Grid>

                    {/* Additional options based on travel type */}
                    {travelType === "honeymoon" && (
                      <Grid item xs={12}>
                        <FormGroup row>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Candlelight Dinner"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Spa Package"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Romantic Room Decoration"
                          />
                        </FormGroup>
                      </Grid>
                    )}

                    {travelType === "family" && (
                      <Grid item xs={12}>
                        <FormGroup row>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Child-friendly activities"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Family suite"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Meal plan included"
                          />
                        </FormGroup>
                      </Grid>
                    )}
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                    }}
                  >
                    <Button onClick={handleBack} variant="outlined">
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#4290e9",
                        "&:hover": { bgcolor: "#FF6B6B" },
                      }}
                    >
                      Submit Booking
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}
          </Box>
        
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Booknow;
