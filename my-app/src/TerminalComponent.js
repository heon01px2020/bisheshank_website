import React, { useState, useRef } from 'react';
import Terminal from 'react-console-emulator';
import AutoComplete from './AutoComplete';
import { commands } from './commands';

const TerminalComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Terminal
        ref={terminalRef}
        commands={commands}
        welcomeMessage={'Welcome to my website! Type "help" to see all available commands.'}
        promptLabel={'me@bisheshank:~$'}
        autoFocus={true}
        errorText={'Command not found! Type "help" to see all available commands.'}
        styleEchoBack='fullInherit'
        value={inputValue}
        onChange={handleCommandChange}
        onSubmit={handleCommandSubmit}
        onKeyDown={handleKeyDown}
        style={{
          overflow: 'auto',
          width: '90%',
          height: '80%',
        }}
      />
    </div>
  );
};

export default TerminalComponent;

