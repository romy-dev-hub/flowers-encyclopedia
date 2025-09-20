// components/FlowerTabs.tsx
"use client";

import { useState } from "react";

export default function FlowerTabs({ flower }: { flower: any }) {
  const [activeTab, setActiveTab] = useState("care");

  const tabs = [
    { id: "care", label: "Care Instructions" },
    { id: "details", label: "Plant Details" },
    { id: "history", label: "History & Symbolism" },
    { id: "uses", label: "Uses & Benefits" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "care" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sunlight</h3>
                <p className="text-gray-700 capitalize">{flower.care.sunlight}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Water</h3>
                <p className="text-gray-700 capitalize">{flower.care.water}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Soil</h3>
                <p className="text-gray-700">{flower.care.soil}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Fertilizer</h3>
                <p className="text-gray-700">{flower.care.fertilizer || "Balanced fertilizer during growing season"}</p>
              </div>
            </div>
            
            {flower.growingTips && flower.growingTips.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Growing Tips</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {flower.growingTips.map((tip: string, index: number) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "details" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Plant Characteristics</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-gray-700">Family</dt>
                  <dd className="text-gray-600">{flower.family || "Not specified"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Bloom Time</dt>
                  <dd className="text-gray-600">{flower.bloomTime}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Height</dt>
                  <dd className="text-gray-600">{flower.height}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Hardiness Zones</dt>
                  <dd className="text-gray-600">{flower.hardiness}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Toxicity</dt>
                  <dd className="text-gray-600">{flower.toxicity || "Non-toxic"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Propagation</dt>
                  <dd className="text-gray-600">{flower.propagation || "Seeds, cuttings, or division"}</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Color Varieties</h3>
              <div className="flex flex-wrap gap-2">
                {flower.colors.map((color: string) => (
                  <span
                    key={color}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">History</h3>
              <p className="text-gray-700">{flower.history || "No historical information available."}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Symbolism</h3>
              <p className="text-gray-700">{flower.symbolism || "No specific symbolism documented."}</p>
            </div>
            
            {flower.meanings && flower.meanings.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Meanings</h3>
                <div className="flex flex-wrap gap-2">
                  {flower.meanings.map((meaning: string) => (
                    <span
                      key={meaning}
                      className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full capitalize"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {flower.trivia && flower.trivia.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interesting Facts</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {flower.trivia.map((fact: string, index: number) => (
                    <li key={index}>{fact}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "uses" && (
          <div>
            {flower.uses && flower.uses.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {flower.uses.map((use: string, index: number) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No specific uses documented.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}