"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nutrition() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          🥗 Nutrition and Lifestyle Support
        </h1>
        <p className="text-lg text-gray-600">
          Fuel your recovery with proper nutrition and healthy habits
        </p>
      </div>

      {/* Anti-Inflammatory Foods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🐟 Anti-Inflammatory Foods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            These foods help reduce inflammation and support tissue healing:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">
                Omega-3 Rich Foods
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Salmon, mackerel, sardines</li>
                <li>• Walnuts and flaxseeds</li>
                <li>• Chia seeds</li>
                <li>• Algae-based supplements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-700">
                Antioxidant Powerhouses
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Berries (blueberries, cherries)</li>
                <li>• Dark leafy greens</li>
                <li>• Colorful vegetables</li>
                <li>• Green tea</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-700">
                Healing Spices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Turmeric (with black pepper)</li>
                <li>• Ginger</li>
                <li>• Garlic</li>
                <li>• Cinnamon</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hydration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💧 Optimal Hydration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Daily Target: 3 Liters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Morning:</strong> 500ml upon waking
                </li>
                <li>
                  • <strong>Before meals:</strong> 250ml each time
                </li>
                <li>
                  • <strong>During work:</strong> Sip regularly
                </li>
                <li>
                  • <strong>Exercise:</strong> Extra 500ml during/after
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Hydration Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintains disc hydration</li>
                <li>• Supports nutrient transport</li>
                <li>• Reduces muscle tension</li>
                <li>• Improves concentration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Foods to Limit */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚠️ Foods to Limit During Recovery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-red-700">
                Pro-Inflammatory Foods
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Processed foods high in sugar</li>
                <li>• Trans fats and fried foods</li>
                <li>• Excessive refined carbohydrates</li>
                <li>• High-sodium processed meats</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-orange-700">
                Moderation Items
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Caffeine (limit to 2 cups coffee/day)</li>
                <li>• Alcohol (1 drink max per day)</li>
                <li>• High-sugar fruits (if diabetic)</li>
                <li>• Nightshade vegetables (if sensitive)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Planning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🍽️ Sample Daily Meal Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Breakfast</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Oatmeal with berries</li>
                <li>• Ground flaxseed</li>
                <li>• Walnuts</li>
                <li>• Green tea</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Lunch</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Salmon salad</li>
                <li>• Mixed greens</li>
                <li>• Olive oil dressing</li>
                <li>• Quinoa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Dinner</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Lean protein</li>
                <li>• Roasted vegetables</li>
                <li>• Sweet potato</li>
                <li>• Turmeric seasoning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supplements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💊 Supportive Supplements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Always consult with your healthcare
              provider before starting any supplements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">For Inflammation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Omega-3:</strong> 1000-2000mg EPA/DHA daily
                </li>
                <li>
                  • <strong>Turmeric/Curcumin:</strong> 500-1000mg daily
                </li>
                <li>
                  • <strong>Vitamin D3:</strong> 1000-2000 IU daily
                </li>
                <li>
                  • <strong>Magnesium:</strong> 300-400mg daily
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">For Recovery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Protein:</strong> 20-30g post-exercise
                </li>
                <li>
                  • <strong>Vitamin C:</strong> 500-1000mg daily
                </li>
                <li>
                  • <strong>B-Complex:</strong> For nerve health
                </li>
                <li>
                  • <strong>Probiotics:</strong> For gut health
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mindfulness */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧘 Mindfulness and Stress Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Daily Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Morning:</strong> 5-minute breathing exercise
                </li>
                <li>
                  • <strong>Work breaks:</strong> 2-minute mindfulness
                </li>
                <li>
                  • <strong>Evening:</strong> 10-minute meditation
                </li>
                <li>
                  • <strong>Sleep:</strong> Progressive muscle relaxation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Stress Reduction</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintain consistent sleep schedule</li>
                <li>• Practice gratitude journaling</li>
                <li>• Limit news/social media exposure</li>
                <li>• Connect with supportive people</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Quick Daily Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">
                Nutrition Goals:
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>□ 3 liters of water consumed</li>
                <li>□ Anti-inflammatory foods included</li>
                <li>□ Processed foods minimized</li>
                <li>□ Mindful eating practiced</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-2">
                Wellness Goals:
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>□ 5-minute breathing exercise</li>
                <li>□ Stress levels managed</li>
                <li>□ Adequate sleep planned</li>
                <li>□ Supplements taken (if prescribed)</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-blue-200">
            <Link href="/">
              <Button variant="outline" className="bg-white">
                ← Back to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
