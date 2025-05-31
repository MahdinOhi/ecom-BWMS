import React from 'react';
import { Grid, List } from 'lucide-react';

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
     <div className="mb-6">
            <div className="flex bg-purple-800/50 rounded-lg p-1 border border-purple-500/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-md transition-all text-sm ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-purple-300 hover:text-white hover:bg-purple-700/50'
                }`}
              >
                <Grid size={14} />
                Grid view
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-md transition-all text-sm ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-purple-300 hover:text-white hover:bg-purple-700/50'
                }`}
              >
                <List size={14} />
                List view
              </button>
            </div>
          </div>
  );
};

export default ViewToggle;