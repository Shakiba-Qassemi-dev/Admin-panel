import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Avatar,
} from "@mui/material";

export default function Profile() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <Paper sx={{ width: "100%", maxWidth: 500, p: 4, mt: 4, mx: 'auto' }} elevation={3}>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Avatar
                src="/images/1.jpg"
                sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
                Welcome to your profile
            </Typography>
            </Box>
            
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="First Name"
                    name="fname"
                    variant="outlined"
                    value={formData.fname}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Last Name"
                    name="lname"
                    variant="outlined"
                    value={formData.lname}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="New Password"
                    name="newPassword"
                    type="password"
                    variant="outlined"
                    value={formData.newPassword}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Paper>
    );
}
