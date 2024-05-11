import express from "express";
import "dotenv/config";
import cors from 'cors'

const sampleData =[
    {
    
      "asset_type": "Laptop",
      "asset_owner": "John Doe",
      "service_tag": "ABC123",
      "model": "HP Elite",
      "asset_code": "123456",
      "asset_make": "HP",
      "asset_state": "In use",
      "purchased_date": "2023-05-15T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 123456789,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
    
      "asset_type": "Desktop",
      "asset_owner": "Jane Smith",
      "service_tag": "DEF456",
      "model": "Dell XPS",
      "asset_code": "789012",
      "asset_make": "Dell",
      "asset_state": "In store",
      "purchased_date": "2023-08-20T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 987654321,
      "asset_location": "Warehouse",
      "branch_code": 2
    },
    {
    
      "asset_type": "Monitor",
      "asset_owner": "Alice Lee",
      "service_tag": "GHI789",
      "model": "LG Ultra",
      "asset_code": "345678",
      "asset_make": "LG",
      "asset_state": "Scrapped",
      "purchased_date": "2022-12-10T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 456789123,
      "asset_location": "Recycle Center",
      "branch_code": 3
    },
    {
    
      "asset_type": "Laptop",
      "asset_owner": "Michael Johnson",
      "service_tag": "JKL012",
      "model": "Lenovo ThinkPad",
      "asset_code": "901234",
      "asset_make": "Lenovo",
      "asset_state": "In use",
      "purchased_date": "2023-03-28T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 234567890,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
    
      "asset_type": "Desktop",
      "asset_owner": "Emma Brown",
      "service_tag": "MNO345",
      "model": "HP Pavilion",
      "asset_code": "678901",
      "asset_make": "HP",
      "asset_state": "In use",
      "purchased_date": "2023-07-14T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 345678901,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
    
      "asset_type": "Printer",
      "asset_owner": "William Taylor",
      "service_tag": "PQR678",
      "model": "Epson WorkForce",
      "asset_code": "789012",
      "asset_make": "Epson",
      "asset_state": "In use",
      "purchased_date": "2023-01-30T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 567890123,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
    
      "asset_type": "Laptop",
      "asset_owner": "Olivia Davis",
      "service_tag": "STU901",
      "model": "MacBook Pro",
      "asset_code": "234567",
      "asset_make": "Apple",
      "asset_state": "In use",
      "purchased_date": "2023-09-05T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 678901234,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
    
      "asset_type": "Monitor",
      "asset_owner": "James Wilson",
      "service_tag": "VWX123",
      "model": "Dell UltraSharp",
      "asset_code": "901234",
      "asset_make": "Dell",
      "asset_state": "In store",
      "purchased_date": "2023-04-17T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 789012345,
      "asset_location": "Warehouse",
      "branch_code": 2
    },
    {
    
      "asset_type": "Laptop",
      "asset_owner": "Sophia Martinez",
      "service_tag": "YZA456",
      "model": "Microsoft Surface",
      "asset_code": "345678",
      "asset_make": "Microsoft",
      "asset_state": "In use",
      "purchased_date": "2023-06-22T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 890123456,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Desktop",
      "asset_owner": "Lucas Rodriguez",
      "service_tag": "BCD789",
      "model": "Acer Aspire",
      "asset_code": "456789",
      "asset_make": "Acer",
      "asset_state": "In use",
      "purchased_date": "2023-02-10T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 901234567,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Laptop",
      "asset_owner": "Benjamin Garcia",
      "service_tag": "CDE890",
      "model": "HP Spectre",
      "asset_code": "567890",
      "asset_make": "HP",
      "asset_state": "In store",
      "purchased_date": "2023-10-08T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 345678901,
      "asset_location": "Warehouse",
      "branch_code": 2
    },
    {
      
      "asset_type": "Printer",
      "asset_owner": "Mia Martinez",
      "service_tag": "EFG901",
      "model": "Canon PIXMA",
      "asset_code": "678901",
      "asset_make": "Canon",
      "asset_state": "In use",
      "purchased_date": "2023-03-19T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 456789012,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Laptop",
      "asset_owner": "Charlotte Hernandez",
      "service_tag": "GHI012",
      "model": "Dell Latitude",
      "asset_code": "789012",
      "asset_make": "Dell",
      "asset_state": "In use",
      "purchased_date": "2023-08-04T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 567890123,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Monitor",
      "asset_owner": "Alexander Smith",
      "service_tag": "IJK345",
      "model": "ASUS ROG",
      "asset_code": "123456",
      "asset_make": "ASUS",
      "asset_state": "In store",
      "purchased_date": "2023-11-26T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 234567890,
      "asset_location": "Warehouse",
      "branch_code": 2
    },
    {
      
      "asset_type": "Laptop",
      "asset_owner": "Madison Johnson",
      "service_tag": "LMN678",
      "model": "Lenovo Yoga",
      "asset_code": "234567",
      "asset_make": "Lenovo",
      "asset_state": "In use",
      "purchased_date": "2023-07-31T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 678901234,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Desktop",
      "asset_owner": "Ethan Thompson",
      "service_tag": "MNO890",
      "model": "Lenovo Ideacentre",
      "asset_code": "567890",
      "asset_make": "Lenovo",
      "asset_state": "In use",
      "purchased_date": "2023-04-02T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 345678901,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Printer",
      "asset_owner": "Abigail Wilson",
      "service_tag": "PQR012",
      "model": "Brother HL-L2340DW",
      "asset_code": "901234",
      "asset_make": "Brother",
      "asset_state": "In use",
      "purchased_date": "2023-09-19T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 901234567,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Laptop",
      "asset_owner": "Elizabeth Martinez",
      "service_tag": "STU234",
      "model": "HP Envy",
      "asset_code": "345678",
      "asset_make": "HP",
      "asset_state": "In use",
      "purchased_date": "2023-05-12T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 123456789,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Desktop",
      "asset_owner": "Henry Anderson",
      "service_tag": "UVW456",
      "model": "Apple iMac",
      "asset_code": "456789",
      "asset_make": "Apple",
      "asset_state": "In use",
      "purchased_date": "2023-01-18T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 234567890,
      "asset_location": "Office",
      "branch_code": 1
    },
    {
      
      "asset_type": "Monitor",
      "asset_owner": "Isabella Taylor",
      "service_tag": "XYZ789",
      "model": "Samsung Odyssey",
      "asset_code": "678901",
      "asset_make": "Samsung",
      "asset_state": "In store",
      "purchased_date": "2023-10-14T00:00:00Z",
      "date_issued": null,
      "date_returned": null,
      "emp_id": null,
      "po_number": 345678901,
      "asset_location": "Warehouse",
      "branch_code": 2
    }
  ]

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/api", (req, res) => {
    res.send("Hello World");
});

async function insertData() {
    try {
         
            // Insert data into the database
            await prisma.it_assets.createMany({ data: sampleData });
        

        console.log('Data inserted into the database successfully!');
    } catch (error) {
        console.error('Error inserting data into the database:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}


//insertData()


// Import routes
import ApiRoutes from "./routes/api.js";
import prisma from "./DB/db.config.js";
app.use("/api", ApiRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
