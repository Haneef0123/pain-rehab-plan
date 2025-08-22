import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Nutrition() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          🥗 Nutrition for Recovery
        </h1>
        <p className="text-lg text-gray-600">
          Anti-inflammatory foods and hydration guidelines to support healing
        </p>
      </div>

      {/* Anti-inflammatory Foods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🍎 Anti-Inflammatory Foods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-700">
                Include More:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fatty fish (salmon, sardines, mackerel)</li>
                <li>• Leafy greens (spinach, kale, arugula)</li>
                <li>• Berries (blueberries, cherries, strawberries)</li>
                <li>• Nuts and seeds (walnuts, flaxseeds, chia)</li>
                <li>• Olive oil and avocados</li>
                <li>• Turmeric and ginger</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-red-700">Limit These:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Processed foods and refined sugars</li>
                <li>• Trans fats and excessive omega-6 oils</li>
                <li>• Excessive alcohol</li>
                <li>• High-sodium processed meats</li>
                <li>• Refined carbohydrates</li>
                <li>• Sugary beverages</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hydration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💧 Hydration Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Daily Water Goal
              </h3>
              <p className="text-blue-700">
                Aim for 8-10 glasses (64-80 oz) of water daily, more if you're
                active
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Morning</h4>
                <p className="text-green-700 text-sm">
                  Start with 16-20 oz upon waking
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800">
                  Throughout Day
                </h4>
                <p className="text-yellow-700 text-sm">
                  Sip regularly, don't wait for thirst
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">Evening</h4>
                <p className="text-purple-700 text-sm">
                  Reduce intake 2-3 hours before bed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <Link to="/">
              <Button variant="outline">← Back to Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
