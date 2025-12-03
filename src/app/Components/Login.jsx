"use client";
import React from 'react'
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { TextField, Button, Box, Typography, Checkbox } from "@mui/material";


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [adminChecked, setAdminChecked] = useState(false)
    const router = useRouter();

    const handleLogin = () => {
        // چک کردن ورودی‌ها
        if (email.trim() === "" || pass.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields!",
            });
            return;
        }

        // در صورت موفقیت
        Swal.fire({
            title: "You logged in successfully!",
            icon: "success",
        }).then(() => {
            router.push("/dashboard"); // ریدایرکت به صفحه dashboard
        });
    };
    useEffect(() => {
        if (adminChecked) {
          setEmail('shakibaqassemi@gmail.com')
          setPass('1234')
        } else {
          setEmail('')
          setPass('')
        }
      }, [adminChecked])
    


    return (
        <>
            <Box
                sx={{
                    width: 350,
                    margin: "100px auto",
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: 3,
                    bgcolor: "#fff",
                }}
            >
                <Typography variant="h5" textAlign="center" mb={3}>
                    Login
                </Typography>

                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                    fullWidth
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    sx={{ mb: 3 }}
                    fullWidth
                />
                <Box display="flex" alignItems="center" my={1}>
                    <Checkbox
                        checked={adminChecked}
                        onChange={() => setAdminChecked(prev => !prev)}
                        color="gray"
                    />
                    <Typography variant="body2">Are you Admin? Click here</Typography>
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ height: 45, fontSize: "16px" }}
                    onClick={handleLogin}
                >
                    Send
                </Button>
            </Box>
        </>
    );
}
