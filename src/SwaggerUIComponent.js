import React, { useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { ChevronDown, Github } from 'lucide-react';
import apiContainers from './apiContainers';
import logo from './logo.png';

const SwaggerUIComponent = () => {
    const [selectedVersion, setSelectedVersion] = useState(Object.keys(apiContainers)[0]);
    const [selectedContainer, setSelectedContainer] = useState(Object.keys(apiContainers[selectedVersion])[0]);
    const [swaggerSpec, setSwaggerSpec] = useState(apiContainers[selectedVersion][selectedContainer]);
    const [displayedSpec, setDisplayedSpec] = useState(swaggerSpec);

    const handleVersionChange = (event) => {
        const version = event.target.value;
        setSelectedVersion(version);
        const firstContainer = Object.keys(apiContainers[version])[0];
        setSelectedContainer(firstContainer);
        setSwaggerSpec(apiContainers[version][firstContainer]);
    };

    const handleContainerChange = (event) => {
        const container = event.target.value;
        setSelectedContainer(container);
        setSwaggerSpec(apiContainers[selectedVersion][container]);
    };

    const handleExplore = () => {
        setDisplayedSpec(swaggerSpec);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img src={logo} alt="DaoCloud Logo" className="h-8 mr-2" />
                        <span className="text-xl font-bold mr-4">DaoCloud OpenAPI Documents</span>
                        <select
                            value={selectedVersion}
                            onChange={handleVersionChange}
                            className="p-2 border rounded"
                        >
                            {Object.keys(apiContainers).map((version) => (
                                <option key={version} value={version}>
                                    {version}
                                </option>
                            ))}
                        </select>
                    </div>
                    <a
                        href="https://github.com/daocloud/daocloud-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <Github size={24} className="mr-1" />
                        <span>GitHub</span>
                    </a>
                </div>
                <div className="flex">
                    <div className="relative w-1/4 mr-2">
                        <select
                            value={selectedContainer}
                            onChange={handleContainerChange}
                            className="w-full p-2 border rounded appearance-none"
                        >
                            {Object.keys(apiContainers[selectedVersion]).map((container) => (
                                <option key={container} value={container}>
                                    {container}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                    <button
                        onClick={handleExplore}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                        Explore
                    </button>
                </div>
            </div>

            <div className="flex-grow overflow-auto">
                {displayedSpec && <SwaggerUI spec={displayedSpec} />}
            </div>
        </div>
    );
};

export default SwaggerUIComponent;