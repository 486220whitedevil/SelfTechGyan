import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate()

    const handleAddCourse = (e) => {
        e.preventDefault();

        const newCourse = {
            id: Date.now(),
            title,
            description,
            price
        };

        setCourses([newCourse, ...courses]);
        setTitle("");
        setDescription("");
        setPrice("");
    };
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8 text-gray-800 text-white">
                📚 Course Management
                
            </h1>
            <button
            className="bg-white text-black px-5 py-2 active:scale-95 mb-10 rounded-lg cursor-pointer"
                 onClick={() => {
                    sessionStorage.clear()
                    navigate('/admin/login')
                 }}
                >Logout</button>

            {/* Add Course Card */}
            <div className="bg-gray-500 p-6 rounded-xl shadow mb-10">
                <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

                <form
                    onSubmit={handleAddCourse}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <input
                        type="text"
                        placeholder="Course title"
                        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <input
                        type="number"
                        placeholder="Price (₹)"
                        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="md:col-span-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        ➕ Add Course
                    </button>
                </form>
            </div>
            {/* Course List */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Course List</h2>

                {courses.length === 0 ? (
                    <p className="text-gray-500">No courses added yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Description</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course) => (
                                    <tr
                                        key={course.id}
                                        className="border-t hover:bg-gray-50"
                                    >
                                        <td className="p-3 font-medium">
                                            {course.title}
                                        </td>
                                        <td className="p-3">
                                            {course.description}
                                        </td>
                                        <td className="p-3">
                                            ₹{course.price}
                                        </td>
                                        <td className="p-3 text-center space-x-2">
                                            <button className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500">
                                                Edit
                                            </button>
                                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
