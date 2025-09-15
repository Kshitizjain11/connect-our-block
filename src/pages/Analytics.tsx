import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, Users, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Analytics = () => {
  const issuesByCategory = [
    { name: "Potholes", value: 45, color: "#8884d8" },
    { name: "Streetlights", value: 32, color: "#82ca9d" },
    { name: "Garbage", value: 28, color: "#ffc658" },
    { name: "Graffiti", value: 18, color: "#ff7300" },
    { name: "Other", value: 15, color: "#00ff88" }
  ];

  const monthlyReports = [
    { month: "Jan", reports: 45, resolved: 42 },
    { month: "Feb", reports: 52, resolved: 48 },
    { month: "Mar", reports: 38, resolved: 35 },
    { month: "Apr", reports: 61, resolved: 58 },
    { month: "May", reports: 55, resolved: 52 },
    { month: "Jun", reports: 67, resolved: 61 }
  ];

  const resolutionTrend = [
    { week: "Week 1", rate: 85 },
    { week: "Week 2", rate: 88 },
    { week: "Week 3", rate: 92 },
    { week: "Week 4", rate: 89 },
    { week: "Week 5", rate: 94 },
    { week: "Week 6", rate: 91 }
  ];

  const stats = [
    {
      title: "Total Reports",
      value: "318",
      change: "+12%",
      trend: "up",
      icon: MapPin,
      description: "This month"
    },
    {
      title: "Resolved Issues",
      value: "296",
      change: "+8%",
      trend: "up",
      icon: CheckCircle,
      description: "93% resolution rate"
    },
    {
      title: "Active Users",
      value: "1,247",
      change: "+24%",
      trend: "up",
      icon: Users,
      description: "Community members"
    },
    {
      title: "Pending Issues",
      value: "22",
      change: "-15%",
      trend: "down",
      icon: AlertTriangle,
      description: "Awaiting resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Community Analytics</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track community engagement, issue resolution rates, and civic improvement progress.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`flex items-center ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className={`w-4 h-4 mr-1 ${
                        stat.trend === 'down' ? 'transform rotate-180' : ''
                      }`} />
                      {stat.change}
                    </span>
                    <span className="text-muted-foreground">{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Reports & Resolutions</CardTitle>
                <CardDescription>
                  Track the number of issues reported and resolved each month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyReports}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="reports" fill="#8884d8" name="Reported" />
                    <Bar dataKey="resolved" fill="#82ca9d" name="Resolved" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Issues by Category */}
            <Card>
              <CardHeader>
                <CardTitle>Issues by Category</CardTitle>
                <CardDescription>
                  Distribution of reported issues across different categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={issuesByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {issuesByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Resolution Rate Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Resolution Rate Trend</CardTitle>
              <CardDescription>
                Weekly resolution rate showing improvement in issue handling efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={resolutionTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Resolution Rate']} />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#8884d8" 
                    strokeWidth={3}
                    dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Average Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2.4 days</div>
                <p className="text-sm text-muted-foreground mt-2">
                  From report to initial response
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">4.6/5</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Based on 156 user ratings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Most Active Area</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">Downtown</div>
                <p className="text-sm text-muted-foreground mt-2">
                  67 reports this month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;