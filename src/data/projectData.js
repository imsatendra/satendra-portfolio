import {
  Code2,
  Database,
  Server,
  ShieldCheck,
  Search,
  LayoutDashboard,
  FileText,
  Users,
  Boxes,
  CalendarDays,
  BarChart3,
} from "lucide-react";

export const projects = [
  {
    id: "crm",
    number: "01",
    title: "TechSunset CRM",
    domain: "crm.techsunset.com",
    category: "CRM / FULL STACK",
    description:
      "A customer relationship management platform designed to manage leads, customers, sales activities, pipelines and business interactions from one workspace.",
    live: "https://crm.techsunset.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    // Replace these images later with your actual screenshots
    screenshots: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Customer list and customer details",
        "Customer add and edit forms",
        "Lead management screens",
        "Search and filtering",
        "Dashboard and data visualization",
        "API integration",
        "Form validation and error handling",
      ],
      backend: [
        "CRUD APIs for customer data",
        "Lead management APIs",
        "Customer and lead search",
        "Customer status updates",
        "User authentication and authorization",
        "Request validation",
        "API error handling",
      ],
      database: [
        "MongoDB database integration",
        "Customer data management",
        "Lead data management",
      ],
    },
  },

  {
    id: "books",
    number: "02",
    title: "TechSunset Books",
    domain: "books.techsunset.com",
    category: "ACCOUNTING / FULL STACK",
    description:
      "Accounting and invoicing software for managing invoices, payments, expenses, customers, vendors, GST and financial reports.",
    live: "https://books.techsunset.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    screenshots: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Dashboard and financial summary",
        "Invoice list and invoice creation",
        "Customer and vendor management",
        "Expense tracking screens",
        "Payment tracking",
        "GST summary and reports",
        "API integration",
        "Form validation and error handling",
      ],
      backend: [
        "Invoice CRUD APIs",
        "Customer and vendor APIs",
        "Expense management APIs",
        "Payment tracking APIs",
        "GST and financial report APIs",
        "Request validation",
        "Error handling",
      ],
      database: [
        "MongoDB integration",
        "Invoice data management",
        "Customer and vendor data",
        "Expense and payment data",
      ],
    },
  },

  {
    id: "hr",
    number: "03",
    title: "TechSunset HR",
    domain: "hr.techsunset.com",
    category: "HR MANAGEMENT / FULL STACK",
    description:
      "A human resource management platform for employees, attendance, leaves, onboarding, departments, holidays and HR reporting.",
    live: "https://hr.techsunset.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    screenshots: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Employee list and employee details",
        "Employee add and edit forms",
        "Attendance management",
        "Leave request and approval screens",
        "Department and holiday management",
        "Employee onboarding",
        "HR reports and dashboard",
        "API integration and validation",
      ],
      backend: [
        "Employee CRUD APIs",
        "Attendance management APIs",
        "Leave management APIs",
        "Department and holiday APIs",
        "Employee onboarding APIs",
        "HR reporting APIs",
        "Authentication and validation",
      ],
      database: [
        "MongoDB integration",
        "Employee data management",
        "Attendance data",
        "Leave data",
      ],
    },
  },

  {
    id: "inventory",
    number: "04",
    title: "TechSunset Inventory",
    domain: "inventory.techsunset.com",
    category: "INVENTORY / FULL STACK",
    description:
      "Inventory management software for products, stock, orders, suppliers, warehouses and fulfillment operations.",
    live: "https://inventory.techsunset.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    screenshots: [
      "https://images.unsplash.com/photo-1586528116493-da8b4e0d7f6a?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Product list and product details",
        "Add and edit product forms",
        "Inventory and stock management",
        "Order management screens",
        "Supplier management",
        "Warehouse management",
        "Fulfillment and stock reports",
        "Search and filtering",
      ],
      backend: [
        "Product CRUD APIs",
        "Stock and inventory APIs",
        "Sales order APIs",
        "Supplier and purchase order APIs",
        "Warehouse management APIs",
        "Stock reservation and updates",
        "Request validation and error handling",
      ],
      database: [
        "MongoDB integration",
        "Product data",
        "Stock management",
        "Order data",
        "Supplier data",
      ],
    },
  },

  {
    id: "project-management",
    number: "05",
    title: "TechSunset Project",
    domain: "project.techsunset.com",
    category: "PROJECT MANAGEMENT / FULL STACK",
    description:
      "Project and task management software for managing projects, tasks, deadlines, milestones, team workload and progress.",
    live: "https://project.techsunset.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    screenshots: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Project list and project details",
        "Task creation and management",
        "Kanban board",
        "Task status and priority",
        "Calendar and deadlines",
        "Milestones and project progress",
        "Team workload and reports",
        "API integration and form validation",
      ],
      backend: [
        "Project CRUD APIs",
        "Task and subtask APIs",
        "Task assignment",
        "Status and priority management",
        "Milestone and deadline management",
        "Team workload and time tracking",
        "Request validation and error handling",
      ],
      database: [
        "MongoDB integration",
        "Project data",
        "Task and subtask data",
        "User and team data",
        "Progress tracking",
      ],
    },
  },

  {
    id: "ts-campus",
    number: "06",
    title: "TS Campus",
    domain: "tscampus.com",
    category: "EDTECH / FULL STACK",
    description:
      "A school management platform for admissions, students, attendance, fees, exams, staff, communication and school operations.",
    live: "https://tscampus.com/",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    screenshots: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85",
    ],

    work: {
      frontend: [
        "Student list and student details",
        "Admission and student forms",
        "Attendance management",
        "Fee management and payment screens",
        "Class, section and subject management",
        "Exam and report card screens",
        "Staff and HR management",
        "Dashboard, reports and notifications",
      ],
      backend: [
        "Student and admission APIs",
        "Attendance APIs",
        "Fee and payment APIs",
        "Class, section and subject APIs",
        "Exam and result APIs",
        "Staff and employee APIs",
        "Notification and communication APIs",
        "Authentication and validation",
      ],
      database: [
        "MongoDB integration",
        "Student data",
        "Admission data",
        "Fee and payment data",
        "Attendance data",
      ],
    },
  },
];