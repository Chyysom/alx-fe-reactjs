import { useState } from "react";

export default function SearchForm({ onSearch }) {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ username, location, minRepos });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto space-y-4"
        >
            <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">Search GitHub Users</h2>

            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <input
                type="number"
                placeholder="Minimum Repositories"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
                Search
            </button>
        </form>
    );
}
