"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Package, Eye } from "lucide-react";
import CreateContainer from "./UploadItem";
import Products from "./Products";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("create");
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Sample Product",
      description: "This is a sample product for demonstration",
      category: "Electronics",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Another Item",
      description: "Another sample item in the system",
      category: "Clothing",
      createdAt: "2024-01-16",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleCreateItem = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newItem = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setItems([...items, newItem]);
    setFormData({ name: "", description: "", category: "" });
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg pt-20">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your items</p>
        </div>

        <nav className="p-4 space-y-2">
          <Button
            variant={activeTab === "create" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("create")}
          >
            <Plus className="h-4 w-4" />
            Create Item
          </Button>

          <Button
            variant={activeTab === "view" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("view")}
          >
            <Eye className="h-4 w-4" />
            View/Delete Items
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === "create" && (
          // <div className="max-w-2xl">
          //   <div className="mb-6">
          //     <h2 className="text-2xl font-bold text-gray-900 mb-2">
          //       Create New Item
          //     </h2>
          //     <p className="text-gray-600">Add a new item to your inventory</p>
          //   </div>

          //   <Card>
          //     <CardHeader>
          //       <CardTitle className="flex items-center gap-2">
          //         <Package className="h-5 w-5" />
          //         Item Details
          //       </CardTitle>
          //       <CardDescription>
          //         Fill in the information below to create a new item
          //       </CardDescription>
          //     </CardHeader>
          //     <CardContent>
          //       <form onSubmit={handleCreateItem} className="space-y-4">
          //         <div>
          //           <Label htmlFor="name">Item Name</Label>
          //           <Input
          //             id="name"
          //             value={formData.name}
          //             onChange={(e) =>
          //               setFormData({ ...formData, name: e.target.value })
          //             }
          //             placeholder="Enter item name"
          //             required
          //           />
          //         </div>

          //         <div>
          //           <Label htmlFor="category">Category</Label>
          //           <Input
          //             id="category"
          //             value={formData.category}
          //             onChange={(e) =>
          //               setFormData({ ...formData, category: e.target.value })
          //             }
          //             placeholder="Enter category"
          //           />
          //         </div>

          //         <div>
          //           <Label htmlFor="description">Description</Label>
          //           <Textarea
          //             id="description"
          //             value={formData.description}
          //             onChange={(e) =>
          //               setFormData({
          //                 ...formData,
          //                 description: e.target.value,
          //               })
          //             }
          //             placeholder="Enter item description"
          //             rows={4}
          //           />
          //         </div>

          //         <Button type="submit" className="w-full">
          //           <Plus className="h-4 w-4 mr-2" />
          //           Create Item
          //         </Button>
          //       </form>
          //     </CardContent>
          //   </Card>
          // </div>
          <CreateContainer />
        )}

        {activeTab === "view" && (
          // <div>
          //   <div className="mb-6">
          //     <h2 className="text-2xl font-bold text-gray-900 mb-2">
          //       Manage Items
          //     </h2>
          //     <p className="text-gray-600">View and delete existing items</p>
          //   </div>

          //   <div className="grid gap-4">
          //     {items.length === 0 ? (
          //       <Card>
          //         <CardContent className="p-8 text-center">
          //           <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          //           <h3 className="text-lg font-medium text-gray-900 mb-2">
          //             No items found
          //           </h3>
          //           <p className="text-gray-500">
          //             Create your first item to get started
          //           </p>
          //         </CardContent>
          //       </Card>
          //     ) : (
          //       items.map((item) => (
          //         <Card key={item.id}>
          //           <CardContent className="p-6">
          //             <div className="flex items-start justify-between">
          //               <div className="flex-1">
          //                 <div className="flex items-center gap-3 mb-2">
          //                   <h3 className="text-lg font-semibold text-gray-900">
          //                     {item.name}
          //                   </h3>
          //                   {item.category && (
          //                     <Badge variant="secondary">{item.category}</Badge>
          //                   )}
          //                 </div>
          //                 {item.description && (
          //                   <p className="text-gray-600 mb-3">
          //                     {item.description}
          //                   </p>
          //                 )}
          //                 <p className="text-sm text-gray-500">
          //                   Created: {item.createdAt}
          //                 </p>
          //               </div>

          //               <Button
          //                 variant="destructive"
          //                 size="sm"
          //                 onClick={() => handleDeleteItem(item.id)}
          //                 className="ml-4"
          //               >
          //                 <Trash2 className="h-4 w-4" />
          //               </Button>
          //             </div>
          //           </CardContent>
          //         </Card>
          //       ))
          //     )}
          //   </div>
          // </div>
          <Products />
        )}
      </div>
    </div>
  );
}
