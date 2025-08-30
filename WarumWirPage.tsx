import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  CheckCircle, 
  Users, 
  Award, 
  Download, 
  FileText, 
  AlertCircle,
  Phone,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';

interface WarumWirPageProps {
  onNavigate: (page: string) => void;
}

export const WarumWirPage: React.FC<WarumWirPageProps> = ({ onNavigate }) => {
  const advantages = [
    {
      icon: Shield,
      title: 'Digitale + Persönliche Beratung',
      description: 'Wir kombinieren moderne digitale Tools mit echter menschlicher Beratung. Sie bekommen das Beste aus beiden Welten – schnell, effizient und trotzdem persönlich.',
      details: [
        'AI-gestützter Chatbot für schnelle Antworten',
        'Persönliche Berater über WhatsApp erreichbar',
        'Video-Beratung nach Terminvereinbarung',
        '24/7 Online-Support verfügbar'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Keine versteckten Kosten',
      description: 'Transparenz ist unser Prinzip. Alle Kosten werden im Voraus kommuniziert. Keine bösen Überraschungen, keine versteckten Gebühren.',
      details: [
        'Alle Preise transparent dargestellt',
        'Keine versteckten Zusatzkosten',
        'Vertragsdetails vor Abschluss erläutert',
        'Widerrufsrecht vollständig erklärt'
      ]
    },
    {
      icon: Users,
      title: 'Schutz vor unseriösen Außendienstlern',
      description: 'Wir schützen Sie vor unseriösen Praktiken mancher Außendienstmitarbeiter. Unsere Berater sind geprüft und arbeiten nach strengen Qualitätsstandards.',
      details: [
        'Alle Berater durchlaufen Qualitätsprüfung',
        'Regelmäßige Schulungen und Kontrollen',
        'Dokumentationspflicht für alle Beratungen',
        'Sofortiger Ausschluss bei Missbrauch'
      ]
    },
    {
      icon: Award,
      title: 'Faire und transparente Angebote',
      description: 'Wir suchen für Sie die besten Deals aus und präsentieren sie ehrlich. Ohne Tricks, ohne Lockangebote – nur faire Preise für echte Leistungen.',
      details: [
        'Echte Marktvergleiche statt Scheinangebote',
        'Alle Konditionen klar kommuniziert',
        'Realistische Verfügbarkeitsangaben',
        'Faire Kündigungskonditionen'
      ]
    }
  ];

  const downloadItems = [
    {
      icon: FileText,
      title: 'Kündigungsvorlagen',
      description: 'Professionelle Vorlagen für die Kündigung Ihrer bestehenden Verträge',
      formats: ['PDF', 'Word'],
      category: 'Vorlagen'
    },
    {
      icon: CheckCircle,
      title: 'Anbieterwechsel-Checkliste',
      description: 'Schritt-für-Schritt Anleitung für einen problemlosen Anbieterwechsel',
      formats: ['PDF'],
      category: 'Checklisten'
    },
    {
      icon: FileText,
      title: 'Auftragserteilungsformulare',
      description: 'Alle notwendigen Formulare für Ihre Vertragsabschlüsse',
      formats: ['PDF', 'Word'],
      category: 'Formulare'
    },
    {
      icon: AlertCircle,
      title: 'Widerrufsbelehrung',
      description: 'Ihre Rechte und Fristen beim Widerruf von Verträgen',
      formats: ['PDF'],
      category: 'Rechtliches'
    }
  ];

  const handleDownload = (item: any) => {
    // Simulate download
    alert(`${item.title} wird heruntergeladen...`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-50 to-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Warum OhneQuatschDeals?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir haben OhneQuatschDeals ins Leben gerufen, weil der Markt voller unseriöser 
              Anbieter und versteckter Kosten ist. Bei uns bekommen Sie ehrliche Beratung 
              und faire Deals – ohne Quatsch.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Advantages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl">{advantage.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {advantage.description}
                    </p>
                    <ul className="space-y-3">
                      {advantage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 max-w-md">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-square flex items-center justify-center">
                      <IconComponent className="h-24 w-24 text-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Download-Bereich
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Laden Sie sich kostenlos alle wichtigen Dokumente herunter, die Sie für 
              Ihren Anbieterwechsel oder Vertragsabschluss benötigen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {item.formats.map((format) => (
                          <Badge key={format} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleDownload(item)}
                        className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Important Notice */}
          <Card className="mt-12 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-orange-900">Wichtiger Hinweis</h3>
                  <p className="text-orange-800 text-sm leading-relaxed">
                    Manche Anbieter erfordern Ihre aktive Mitarbeit beim Wechselprozess. 
                    In diesen Fällen müssen Sie beispielsweise die Kündigung bei Ihrem 
                    aktuellen Anbieter selbst einreichen. Unser AI-Berater kann Ihnen 
                    alle benötigten Dokumente direkt per WhatsApp zusenden und Sie 
                    Schritt für Schritt durch den Prozess führen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Bereit für ehrliche Beratung?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie sich von unseren Experten beraten oder nutzen Sie unseren AI-Berater 
            für schnelle Antworten. Ohne Quatsch, ohne versteckte Kosten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              onClick={() => onNavigate('berater')}
            >
              <Users className="mr-2 h-5 w-5" />
              Berater kontaktieren
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-purple-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              AI-Berater starten
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};