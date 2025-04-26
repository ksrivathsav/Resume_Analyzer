import React, { useState } from 'react';
import { Terminal, Database, Server, Brain } from 'lucide-react';

interface DomainSelectorProps {
  onDomainChange: (domains: string[]) => void;
}

const DomainSelector: React.FC<DomainSelectorProps> = ({ onDomainChange }) => {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const domains = [
    { 
      id: 'frontend', 
      name: 'Frontend', 
      icon: <Terminal className="h-5 w-5" />,
      description: 'React, Angular, Vue, HTML/CSS, JavaScript'
    },
    { 
      id: 'backend', 
      name: 'Backend', 
      icon: <Database className="h-5 w-5" />,
      description: 'Node.js, Python, Java, SQL, REST APIs'
    },
    { 
      id: 'devops', 
      name: 'DevOps', 
      icon: <Server className="h-5 w-5" />,
      description: 'Docker, Kubernetes, CI/CD, AWS, Terraform'
    },
    { 
      id: 'ml', 
      name: 'Machine Learning', 
      icon: <Brain className="h-5 w-5" />,
      description: 'TensorFlow, PyTorch, NLP, Data Science'
    }
  ];

  const toggleDomain = (domainId: string) => {
    setSelectedDomains(prev => {
      const newDomains = prev.includes(domainId)
        ? prev.filter(d => d !== domainId)
        : [...prev, domainId];
      
      onDomainChange(newDomains);
      return newDomains;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {domains.map((domain) => (
        <button
          key={domain.id}
          type="button"
          className={`p-4 rounded-lg border-2 text-left transition-colors flex items-start ${
            selectedDomains.includes(domain.id)
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
          }`}
          onClick={() => toggleDomain(domain.id)}
        >
          <span 
            className={`p-2 rounded-full mr-3 ${
              selectedDomains.includes(domain.id)
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {domain.icon}
          </span>
          <div>
            <h3 className="font-medium">{domain.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{domain.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DomainSelector;