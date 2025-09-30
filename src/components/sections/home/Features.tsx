'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Shield, Zap, Cloud, BarChart3, Code2, Database, Rocket, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Processing',
      description:
        'Advanced machine learning algorithms that adapt and optimize performance in real-time for maximum efficiency.',
      badge: 'AI Technology',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Military-grade encryption with SOC 2 compliance and zero-trust architecture protecting your critical data.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description:
        'Sub-millisecond response times with 99.99% uptime SLA backed by our global infrastructure network.',
      badge: 'Performance',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description:
        'Built for the cloud with auto-scaling, microservices, and containerized deployment across multiple regions.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Advanced data visualization and predictive insights with customizable dashboards and automated reporting.',
      badge: 'Analytics',
    },
    {
      icon: Code2,
      title: 'Developer Experience',
      description:
        'Comprehensive REST APIs, GraphQL endpoints, and SDKs with extensive documentation and code samples.',
      badge: 'Developer Tools',
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description:
        'Intelligent data processing with automated backups, version control, and seamless data migration tools.',
      badge: 'Data',
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description:
        'One-click deployment with CI/CD pipelines, automated testing, and rollback capabilities for safe releases.',
      badge: 'DevOps',
    },
    {
      icon: Lock,
      title: 'Privacy Compliance',
      description:
        'GDPR, CCPA, and HIPAA compliant with data residency controls and comprehensive audit trails.',
      badge: 'Compliance',
    },
  ];

  const handleStartTrial = () => {
    console.log('Starting free trial for Acme Tech platform');
    // Navigate to trial signup
  };

  const handleViewFeatures = () => {
    console.log('Viewing detailed feature documentation');
    // Navigate to features page
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium">
            Platform Capabilities
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Enterprise-Grade Technology
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Acme Tech delivers cutting-edge solutions with enterprise security, AI-powered
            automation, and developer-first tools that scale with your business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="size-7 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium bg-muted/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Tech Stack?</h3>
            <p className="text-muted-foreground text-lg">
              Join thousands of developers and enterprises already building with Acme Tech's
              platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-accent hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              Explore Documentation
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
