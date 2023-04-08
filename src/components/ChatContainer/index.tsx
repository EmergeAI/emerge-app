import { ipcRenderer } from 'electron'
import type { ProgressInfo } from 'electron-updater'
import { useCallback, useEffect, useState } from 'react'
import styles from './ChatContainer.module.scss'

const ChatContainer = () => {
    return (
        <div className={styles.chatcontainer}>
            <div className="chat-header">
                {/* Chat header elements */}
            </div>
            <div className="chat">
                {/* Chat messages */}
            </div>
            <div className="chat-input">
                {/* Chat input area */}
            </div>
        </div>
    );
};

export default ChatContainer
