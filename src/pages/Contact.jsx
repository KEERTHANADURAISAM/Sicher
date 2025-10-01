import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import contact from "/message.png";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSending(true);

    // Template params matching your EmailJS template exactly
    const templateParams = {
      name: formData.name,        // Changed from 'from_name' to 'name'
      email: formData.email,      // Changed from 'from_email' to 'email'
      message: formData.message,
      title: "Client Inquiry Form"       // For {{title}} in subject
    };

    // console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_3h36f23",      // Your Service ID
        "template_hk2jg47",     // Your Template ID
        templateParams,          // Must match {{from_name}}, {{from_email}}, {{message}}
        "wbt1xDDq-KpaGTVIU"     // Your Public Key
      )
      .then(
        (response) => {
          // console.log("✅ EMAIL SENT SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully! We'll get back to you soon.", {
            duration: 4000,
            style: {
              background: '#4CAF50',
              color: '#fff',
            },
          });
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
          setSending(false);
        },
        (error) => {
          console.error("❌ EMAIL SEND FAILED:", error);
          toast.error(`Failed to send: ${error.text || "Please try again"}`, {
            duration: 4000,
            style: {
              background: '#f44336',
              color: '#fff',
            },
          });
          setSending(false);
        }
      );
  };
  
  return (
    <Box
      sx={{
        py: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Toaster position="top-center" />
        <Grid
          container
          spacing={0}
          sx={{
            background: "#fff",
            borderRadius: 4,
            boxShadow: 3,
            overflow: "hidden",
          }}
        >
          {/* Left Section - Contact Details & Image */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              background: "linear-gradient(to right, #3A53F0, #5DA1FC)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              py: 4,
              px: 3,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Get in Touch
            </Typography>
            <Typography variant="body1" mt={1}>
              We'd love to hear from you!
            </Typography>
            <Box
              component="img"
              src={contact}
              alt="Contact"
              sx={{
                width: "100%",
                maxWidth: 200,
                mt: 2,
                borderRadius: 2,
              }}
            />
            <Box mt={3} sx={{ textAlign: "center", width: "100%", px: 3 }}>
              {[
                { icon: <LocationOn sx={{ color: "#FFD700", fontSize: 28 }} />, text: "Sicher Shared Services Private Limited  89, Balaji Nagar, Kalapatti Post, Coimbatore – 641048" },
                { icon: <Phone sx={{ color: "#32CD32", fontSize: 28 }} />, text: "8667289653" },
                { icon: <Email sx={{ color: "#FF4500", fontSize: 28 }} />, text: "sicherinc@gmail.com" }
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    gap: 1.5,
                    py: 1,
                    px: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    maxWidth: "500px",
                    mx: "auto",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      backgroundColor: "rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="body1" fontWeight="500" sx={{ textAlign: "left", flex: 1 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Section - Contact Form */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 600
            }}
          >
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
              Let's Talk
            </Typography>
            <form onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    disabled={sending}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={sending}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    disabled={sending}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={sending}
                  sx={{
                    width: "50%",
                    bgcolor: "#627DFE",
                    ":hover": { bgcolor: "#4a5bdc" },
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;