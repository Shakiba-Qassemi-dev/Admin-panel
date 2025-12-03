import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Chip,
} from "@mui/material";

const inventoryData = [
  { product: "Laptop Pro X", sku: "LPX-001", quantity: 25, price: "$1200", status: "In Stock" },
  { product: "Smartphone Z", sku: "SPZ-101", quantity: 50, price: "$800", status: "In Stock" },
  { product: "Wireless Earbuds", sku: "WE-305", quantity: 100, price: "$150", status: "In Stock" },
  { product: "Gaming Mouse", sku: "GM-204", quantity: 0, price: "$60", status: "Out of Stock" },
  { product: "Mechanical Keyboard", sku: "MK-112", quantity: 30, price: "$120", status: "In Stock" },
  { product: "4K Monitor", sku: "4KM-501", quantity: 12, price: "$400", status: "Low Stock" },
  { product: "Webcam HD", sku: "WC-303", quantity: 0, price: "$90", status: "Out of Stock" },
  { product: "Portable SSD 1TB", sku: "SSD-1TB", quantity: 20, price: "$180", status: "In Stock" },
  { product: "Smartwatch X2", sku: "SWX2-205", quantity: 5, price: "$250", status: "Low Stock" },
  { product: "Bluetooth Speaker", sku: "BS-407", quantity: 15, price: "$120", status: "In Stock" },
  { product: "Bluetooth Speaker", sku: "BS-407", quantity: 15, price: "$120", status: "In Stock" },
  { product: "Bluetooth Speaker", sku: "BS-407", quantity: 15, price: "$120", status: "In Stock" },
  { product: "Bluetooth Speaker", sku: "BS-407", quantity: 15, price: "$120", status: "In Stock" },
  { product: "Bluetooth Speaker", sku: "BS-407", quantity: 15, price: "$120", status: "In Stock" },
];

export default function InventoryTable() {
  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "success";
      case "Low Stock":
        return "warning";
      case "Out of Stock":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Paper sx={{ width: "100%", marginTop: 4, padding: 2 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Products
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>SKU</b></TableCell>
              <TableCell><b>Quantity</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {inventoryData.map((item, index) => (
              <TableRow key={index} hover>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Chip label={item.status} color={getStatusColor(item.status)} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
