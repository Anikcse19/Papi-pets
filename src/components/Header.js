import React from "react";

const Header = (props) => {
    return (
        <div className="header w-[20%] mx-auto !h-28">
            <div id="logo_home">
                <a href="https://papipets.tn/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 259.58 100.96"
                    >
                        <defs></defs>
                        <g id="a" />
                        <g id="b">
                            <g id="c">
                                {props.logoColor == undefined ||
                                props.logoColor == null ||
                                props.logoColor == "white" ? (
                                    <g>
                                        <path
                                            id="text_logo"
                                            className="d"
                                            d="M28.55,24.58c-1.05,1.9-2.67,3.43-4.84,4.59-2.18,1.16-4.88,1.75-8.11,1.75h-5.97v14.19H0V5.58H15.6c3.15,0,5.82,.54,8,1.63,2.18,1.09,3.81,2.59,4.9,4.51,1.09,1.91,1.63,4.11,1.63,6.59,0,2.29-.53,4.38-1.58,6.28Zm-9.57-2.62c.9-.86,1.35-2.08,1.35-3.66s-.45-2.8-1.35-3.66c-.9-.86-2.27-1.3-4.11-1.3h-5.24v9.91h5.24c1.84,0,3.21-.43,4.11-1.3Z"
                                        />
                                        <path
                                            className="d"
                                            d="M35.06,20.84c1.22-2.44,2.88-4.32,4.98-5.63,2.1-1.31,4.45-1.97,7.04-1.97,2.21,0,4.16,.45,5.83,1.35,1.67,.9,2.96,2.08,3.86,3.55v-4.45h9.63v31.42h-9.63v-4.45c-.94,1.46-2.24,2.65-3.91,3.55-1.67,.9-3.61,1.35-5.83,1.35-2.55,0-4.88-.67-6.98-2-2.1-1.33-3.76-3.23-4.98-5.69-1.22-2.46-1.83-5.3-1.83-8.53s.61-6.06,1.83-8.5Zm19.71,2.87c-1.33-1.39-2.96-2.08-4.87-2.08s-3.54,.69-4.87,2.06c-1.33,1.37-2,3.26-2,5.66s.67,4.31,2,5.72c1.33,1.41,2.96,2.11,4.87,2.11s3.54-.69,4.87-2.08c1.33-1.39,2-3.28,2-5.69s-.67-4.3-2-5.69Z"
                                        />
                                        <path
                                            className="d"
                                            d="M86.89,14.59c1.65-.9,3.58-1.35,5.8-1.35,2.59,0,4.94,.66,7.04,1.97,2.1,1.31,3.76,3.19,4.98,5.63,1.22,2.44,1.83,5.28,1.83,8.5s-.61,6.07-1.83,8.53c-1.22,2.46-2.88,4.36-4.98,5.69-2.1,1.33-4.45,2-7.04,2-2.18,0-4.1-.45-5.77-1.35-1.67-.9-2.98-2.06-3.91-3.49v19.37h-9.63V13.68h9.63v4.45c.94-1.46,2.23-2.65,3.89-3.55Zm7.86,9.09c-1.33-1.37-2.98-2.06-4.93-2.06s-3.54,.7-4.87,2.08c-1.33,1.39-2,3.29-2,5.69s.67,4.3,2,5.69c1.33,1.39,2.96,2.08,4.87,2.08s3.55-.7,4.9-2.11c1.35-1.41,2.03-3.31,2.03-5.72s-.67-4.29-2-5.66Z"
                                        />
                                        <path
                                            className="d"
                                            d="M112.32,8.93c-1.07-.99-1.6-2.22-1.6-3.69s.53-2.75,1.6-3.74c1.07-.99,2.45-1.49,4.14-1.49s3.01,.5,4.08,1.49c1.07,1,1.6,2.24,1.6,3.74s-.54,2.69-1.6,3.69c-1.07,1-2.43,1.49-4.08,1.49s-3.07-.5-4.14-1.49Zm8.93,4.76v31.42h-9.63V13.68h9.63Z"
                                        />
                                        <path
                                            className="d"
                                            d="M172.27,62.82c-2.23,2.16-5.64,3.24-10.22,3.24h-7.55v16.39h-5.12V43.19h12.67c4.43,0,7.8,1.07,10.11,3.21,2.31,2.14,3.46,4.9,3.46,8.28s-1.12,5.98-3.35,8.14Zm-3.91-2.84c1.35-1.24,2.03-3,2.03-5.29,0-4.84-2.78-7.26-8.33-7.26h-7.55v14.42h7.55c2.85,0,4.96-.62,6.31-1.86Z"
                                        />
                                        <path
                                            className="d"
                                            d="M209.97,68.93h-24.67c.19,3.04,1.23,5.42,3.13,7.12,1.89,1.71,4.2,2.56,6.9,2.56,2.21,0,4.06-.52,5.55-1.55,1.48-1.03,2.52-2.41,3.13-4.14h5.52c-.83,2.97-2.48,5.38-4.96,7.24s-5.56,2.79-9.24,2.79c-2.93,0-5.55-.66-7.86-1.97-2.31-1.31-4.12-3.18-5.43-5.6-1.31-2.42-1.97-5.23-1.97-8.42s.64-5.99,1.91-8.39c1.28-2.4,3.07-4.25,5.38-5.55,2.31-1.3,4.96-1.94,7.97-1.94s5.52,.64,7.77,1.91c2.25,1.28,3.99,3.03,5.21,5.27,1.22,2.23,1.83,4.76,1.83,7.57,0,.98-.06,2.01-.17,3.1Zm-6.42-9.21c-.86-1.41-2.04-2.48-3.52-3.21-1.48-.73-3.13-1.1-4.93-1.1-2.59,0-4.8,.83-6.62,2.48-1.82,1.65-2.86,3.94-3.13,6.87h19.49c0-1.95-.43-3.63-1.3-5.04Z"
                                        />
                                        <path
                                            className="d"
                                            d="M223.15,55.81v18.19c0,1.5,.32,2.56,.96,3.18,.64,.62,1.75,.93,3.32,.93h3.77v4.34h-4.62c-2.85,0-4.99-.66-6.42-1.97-1.43-1.31-2.14-3.47-2.14-6.48v-18.19h-4v-4.22h4v-7.77h5.12v7.77h8.05v4.22h-8.05Z"
                                        />
                                        <path
                                            className="d"
                                            d="M241.95,81.74c-1.88-.81-3.36-1.93-4.45-3.38-1.09-1.44-1.69-3.11-1.8-4.98h5.29c.15,1.54,.87,2.8,2.17,3.77,1.3,.98,2.99,1.46,5.1,1.46,1.95,0,3.49-.43,4.62-1.3,1.13-.86,1.69-1.95,1.69-3.27s-.6-2.36-1.8-3.01c-1.2-.66-3.06-1.3-5.58-1.94-2.29-.6-4.16-1.21-5.6-1.83-1.45-.62-2.68-1.54-3.72-2.76-1.03-1.22-1.55-2.82-1.55-4.82,0-1.58,.47-3.02,1.41-4.34,.94-1.31,2.27-2.36,4-3.13,1.73-.77,3.7-1.15,5.91-1.15,3.42,0,6.18,.86,8.28,2.59,2.1,1.73,3.23,4.09,3.38,7.1h-5.12c-.11-1.61-.76-2.91-1.94-3.89-1.18-.98-2.77-1.46-4.76-1.46-1.84,0-3.3,.39-4.39,1.18-1.09,.79-1.63,1.82-1.63,3.1,0,1.01,.33,1.85,.99,2.51,.66,.66,1.48,1.18,2.48,1.58,.99,.39,2.37,.84,4.14,1.32,2.22,.6,4.02,1.19,5.41,1.77,1.39,.58,2.58,1.46,3.58,2.62,.99,1.16,1.51,2.68,1.55,4.56,0,1.69-.47,3.21-1.41,4.56-.94,1.35-2.26,2.41-3.97,3.18-1.71,.77-3.67,1.15-5.89,1.15-2.36,0-4.49-.4-6.36-1.21Z"
                                        />
                                        <path
                                            className="d"
                                            d="M126.17,51.85c-.09,.29-.05,.6,.12,.85,.73,.94,1.93-.41,1.24-1.2-.33-.62-1.23-.24-1.35,.35Z"
                                        />
                                        <path
                                            className="d"
                                            d="M106.77,99.33c3.71,1.07,7.29,1.34,11.12,1.6,8.48,.09,17.15,.02,26.1-.27,.25-.03,.45-.2,.53-.44,.63-1.49,.52-3.18-.28-4.58-.28-.47-.72-.84-.87-1.37-.39-1.38-.4-2.95-.46-4.38-.12-2.9-.03-5.8,.05-8.7,1.08-4.57,1.01-9.47-.45-13.94h0c.26-.2,.47-.47,.59-.78,.08-.11,.13-.24,.14-.37,.16-1.99-.02-4.04-.2-6.02h0c-.36-3.97-1.12-7.89-2.28-11.7-.46-1.5-.77-3.35-2.51-3.79-2.66-.66-5.66-.67-8.22,.33-1.72,.68-3.12,1.82-4.71,2.73-1.49,.84-3.04,1.55-4.64,2.15-1.56,.63-3.32,1.05-4.6,2.18-1.23,1-.62,3.58-.35,4.86,.36,1.73,1.09,3.59,2.76,4.44,1.88,.95,4.36,.61,6.39,.56,.85-.02,1.71-.07,2.56-.16-8.45,8.71-15.47,21.68-11.07,33.92h0c-.09,.01-.17,.04-.25,.08-4.73-.13-10.12-1.23-12.85-5.49-1.95-3.04-2.07-9.44,2.42-10.38,1.35-.11,2.94,.12,3.66-1.29,.38-.76,.12-1.63-.44-2.23h0c.52-.06,1.04-.07,1.57-.05,.85,.04,1.7,.35,2.52-.03,1.4-.66,.86-2.07,.54-3.26,.96-.2,1.93-.41,2.88-.64,.81-.2,1.38-.5,1.72-1.28,.67-1.52,.14-3.03-.89-4.24-2.99-3.4-9.24-3.58-13.02-1.58-14.04,7.82-14.53,29.85,2.57,34.15h0Zm16.22-38.71c1.27-.92,2.03-2.35,2.43-3.84,.21-.78-1-1.11-1.21-.33-.49,2.05-1.73,3.61-3.82,4.06-2.39-.23-3.25-2.51-3.6-4.58,.23-.28,.52-.49,.86-.62,1.56-.56,1.71-2.22,1.25-3.61,2.06-.75,4.13-1.47,6.09-2.47,2.73-1.49,4.96-3.5,8.21-3.7-2.73,2.58-3,10.68-3.17,14.43-2.34,.41-4.65,.57-7.05,.65h0Zm-4.57,16.7c2.39-5.98,6.38-11.21,10.74-15.88,.29-.04,.58-.09,.86-.15,.11,1.58-.26,3.47,.68,4.86,.74,.98,2.2,1.1,3.33,1.29,2.46,.38,4.98,.52,7.45,.21,1.47,5.98,.99,10.36-.48,15.63-.33,.59-.93,.26-1.08-.33-.09-3.43-.24-6.88-.71-10.25-.1-.52-.88-.38-.89,.12,.05,3.69,.44,7.39,.4,11.09,.03,2.75,.02,5.5-.09,8.25-.03,.76-.12,1.53,0,2.28v.12h-.01c-.04,.11-.04,.22,0,.33-.02,.08,0,.16,.04,.22,.39,.6,.95,1.04,1.27,1.7,.34,.73,.69,1.94-.18,2.39-.2,.03-.39,.07-.58,.14-.81,0-1.49,.06-2.3-.01,.49-1.79-.31-3.67-2.16-4.36,.63-5.63,1.19-11.47,.64-17.12-.07-.39-.74-.4-.8,0-.26,2-.09,4.04-.23,6.05-1.44-2.99-5.39-2.96-7.81-1.21h0c-.99,.7-1.91,1.5-2.72,2.4-.85,.9-1.82,1.91-2.39,3.02-.28,.54,.4,1.1,.85,.66,1.4-1.48,2.6-3.16,4.22-4.42,4.16-3.32,7.88-1.1,7.16,4.14-.23,2.2-1.19,4.23-2.25,6.14h0c-.95,.05-1.89,.14-2.83,.29-.68,.1-1.41,.1-1.92,.59-1.15,2.02,10.4-2.24,8.88,3.55-3.11,.13-6.23,.24-9.34,.37-2.12-.02-5.93,.2-7.29-1.81-3.39-6.66-3.22-13.44-.46-20.28h0Zm-19.68-5.38c2.33-3.47,5.68-6.07,9.88-6.66,3.02-.23,6.71,.39,8.24,3.33,.99,4.06-4.71,2.26-4.69,3.84,.22,1.27,1.41,3.02-.91,2.63h0c-1.41-.16-2.84-.08-4.22,.24-.52,.12-.53,.66-.25,.97,.14,.43,.77,.32,1.1,.54,.7,.49,.63,1.36-.18,1.65-.75,.25-1.57-.18-2.32,.06-.78,.05-1.52,.46-2.11,.86-2.77,1.16-3.93,6.58-4.01,9.3h0c-.08,.32-.19,.63-.31,.93-1.09,1-2.34,.08-2.96-1.05-1.88-5.37-.55-11.9,2.74-16.63h0Z"
                                        />
                                        <path
                                            id="heart"
                                            className="e"
                                            d="M141.98,39.9c.06,.1,.18,.15,.29,.14,.12-.02,.21-.1,.25-.21,1.32-3.33,5.48-4.09,7.28-7.05,3.15-5.45-4.75-9.65-7.48-3.9-2.61-5.94-10.72-2.77-8.83,3.35,1.39,3.91,6.23,4.52,8.49,7.68h0Z"
                                        />
                                    </g>
                                ) : (
                                    <g>
                                        <path
                                            id="text_logo"
                                            className="d"
                                            d="M28.55,24.58c-1.05,1.9-2.67,3.43-4.84,4.59-2.18,1.16-4.88,1.75-8.11,1.75h-5.97v14.19H0V5.58H15.6c3.15,0,5.82,.54,8,1.63,2.18,1.09,3.81,2.59,4.9,4.51,1.09,1.91,1.63,4.11,1.63,6.59,0,2.29-.53,4.38-1.58,6.28Zm-9.57-2.62c.9-.86,1.35-2.08,1.35-3.66s-.45-2.8-1.35-3.66c-.9-.86-2.27-1.3-4.11-1.3h-5.24v9.91h5.24c1.84,0,3.21-.43,4.11-1.3Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M35.06,20.84c1.22-2.44,2.88-4.32,4.98-5.63,2.1-1.31,4.45-1.97,7.04-1.97,2.21,0,4.16,.45,5.83,1.35,1.67,.9,2.96,2.08,3.86,3.55v-4.45h9.63v31.42h-9.63v-4.45c-.94,1.46-2.24,2.65-3.91,3.55-1.67,.9-3.61,1.35-5.83,1.35-2.55,0-4.88-.67-6.98-2-2.1-1.33-3.76-3.23-4.98-5.69-1.22-2.46-1.83-5.3-1.83-8.53s.61-6.06,1.83-8.5Zm19.71,2.87c-1.33-1.39-2.96-2.08-4.87-2.08s-3.54,.69-4.87,2.06c-1.33,1.37-2,3.26-2,5.66s.67,4.31,2,5.72c1.33,1.41,2.96,2.11,4.87,2.11s3.54-.69,4.87-2.08c1.33-1.39,2-3.28,2-5.69s-.67-4.3-2-5.69Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M86.89,14.59c1.65-.9,3.58-1.35,5.8-1.35,2.59,0,4.94,.66,7.04,1.97,2.1,1.31,3.76,3.19,4.98,5.63,1.22,2.44,1.83,5.28,1.83,8.5s-.61,6.07-1.83,8.53c-1.22,2.46-2.88,4.36-4.98,5.69-2.1,1.33-4.45,2-7.04,2-2.18,0-4.1-.45-5.77-1.35-1.67-.9-2.98-2.06-3.91-3.49v19.37h-9.63V13.68h9.63v4.45c.94-1.46,2.23-2.65,3.89-3.55Zm7.86,9.09c-1.33-1.37-2.98-2.06-4.93-2.06s-3.54,.7-4.87,2.08c-1.33,1.39-2,3.29-2,5.69s.67,4.3,2,5.69c1.33,1.39,2.96,2.08,4.87,2.08s3.55-.7,4.9-2.11c1.35-1.41,2.03-3.31,2.03-5.72s-.67-4.29-2-5.66Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M112.32,8.93c-1.07-.99-1.6-2.22-1.6-3.69s.53-2.75,1.6-3.74c1.07-.99,2.45-1.49,4.14-1.49s3.01,.5,4.08,1.49c1.07,1,1.6,2.24,1.6,3.74s-.54,2.69-1.6,3.69c-1.07,1-2.43,1.49-4.08,1.49s-3.07-.5-4.14-1.49Zm8.93,4.76v31.42h-9.63V13.68h9.63Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M172.27,62.82c-2.23,2.16-5.64,3.24-10.22,3.24h-7.55v16.39h-5.12V43.19h12.67c4.43,0,7.8,1.07,10.11,3.21,2.31,2.14,3.46,4.9,3.46,8.28s-1.12,5.98-3.35,8.14Zm-3.91-2.84c1.35-1.24,2.03-3,2.03-5.29,0-4.84-2.78-7.26-8.33-7.26h-7.55v14.42h7.55c2.85,0,4.96-.62,6.31-1.86Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M209.97,68.93h-24.67c.19,3.04,1.23,5.42,3.13,7.12,1.89,1.71,4.2,2.56,6.9,2.56,2.21,0,4.06-.52,5.55-1.55,1.48-1.03,2.52-2.41,3.13-4.14h5.52c-.83,2.97-2.48,5.38-4.96,7.24s-5.56,2.79-9.24,2.79c-2.93,0-5.55-.66-7.86-1.97-2.31-1.31-4.12-3.18-5.43-5.6-1.31-2.42-1.97-5.23-1.97-8.42s.64-5.99,1.91-8.39c1.28-2.4,3.07-4.25,5.38-5.55,2.31-1.3,4.96-1.94,7.97-1.94s5.52,.64,7.77,1.91c2.25,1.28,3.99,3.03,5.21,5.27,1.22,2.23,1.83,4.76,1.83,7.57,0,.98-.06,2.01-.17,3.1Zm-6.42-9.21c-.86-1.41-2.04-2.48-3.52-3.21-1.48-.73-3.13-1.1-4.93-1.1-2.59,0-4.8,.83-6.62,2.48-1.82,1.65-2.86,3.94-3.13,6.87h19.49c0-1.95-.43-3.63-1.3-5.04Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M223.15,55.81v18.19c0,1.5,.32,2.56,.96,3.18,.64,.62,1.75,.93,3.32,.93h3.77v4.34h-4.62c-2.85,0-4.99-.66-6.42-1.97-1.43-1.31-2.14-3.47-2.14-6.48v-18.19h-4v-4.22h4v-7.77h5.12v7.77h8.05v4.22h-8.05Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M241.95,81.74c-1.88-.81-3.36-1.93-4.45-3.38-1.09-1.44-1.69-3.11-1.8-4.98h5.29c.15,1.54,.87,2.8,2.17,3.77,1.3,.98,2.99,1.46,5.1,1.46,1.95,0,3.49-.43,4.62-1.3,1.13-.86,1.69-1.95,1.69-3.27s-.6-2.36-1.8-3.01c-1.2-.66-3.06-1.3-5.58-1.94-2.29-.6-4.16-1.21-5.6-1.83-1.45-.62-2.68-1.54-3.72-2.76-1.03-1.22-1.55-2.82-1.55-4.82,0-1.58,.47-3.02,1.41-4.34,.94-1.31,2.27-2.36,4-3.13,1.73-.77,3.7-1.15,5.91-1.15,3.42,0,6.18,.86,8.28,2.59,2.1,1.73,3.23,4.09,3.38,7.1h-5.12c-.11-1.61-.76-2.91-1.94-3.89-1.18-.98-2.77-1.46-4.76-1.46-1.84,0-3.3,.39-4.39,1.18-1.09,.79-1.63,1.82-1.63,3.1,0,1.01,.33,1.85,.99,2.51,.66,.66,1.48,1.18,2.48,1.58,.99,.39,2.37,.84,4.14,1.32,2.22,.6,4.02,1.19,5.41,1.77,1.39,.58,2.58,1.46,3.58,2.62,.99,1.16,1.51,2.68,1.55,4.56,0,1.69-.47,3.21-1.41,4.56-.94,1.35-2.26,2.41-3.97,3.18-1.71,.77-3.67,1.15-5.89,1.15-2.36,0-4.49-.4-6.36-1.21Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M126.17,51.85c-.09,.29-.05,.6,.12,.85,.73,.94,1.93-.41,1.24-1.2-.33-.62-1.23-.24-1.35,.35Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            className="d"
                                            d="M106.77,99.33c3.71,1.07,7.29,1.34,11.12,1.6,8.48,.09,17.15,.02,26.1-.27,.25-.03,.45-.2,.53-.44,.63-1.49,.52-3.18-.28-4.58-.28-.47-.72-.84-.87-1.37-.39-1.38-.4-2.95-.46-4.38-.12-2.9-.03-5.8,.05-8.7,1.08-4.57,1.01-9.47-.45-13.94h0c.26-.2,.47-.47,.59-.78,.08-.11,.13-.24,.14-.37,.16-1.99-.02-4.04-.2-6.02h0c-.36-3.97-1.12-7.89-2.28-11.7-.46-1.5-.77-3.35-2.51-3.79-2.66-.66-5.66-.67-8.22,.33-1.72,.68-3.12,1.82-4.71,2.73-1.49,.84-3.04,1.55-4.64,2.15-1.56,.63-3.32,1.05-4.6,2.18-1.23,1-.62,3.58-.35,4.86,.36,1.73,1.09,3.59,2.76,4.44,1.88,.95,4.36,.61,6.39,.56,.85-.02,1.71-.07,2.56-.16-8.45,8.71-15.47,21.68-11.07,33.92h0c-.09,.01-.17,.04-.25,.08-4.73-.13-10.12-1.23-12.85-5.49-1.95-3.04-2.07-9.44,2.42-10.38,1.35-.11,2.94,.12,3.66-1.29,.38-.76,.12-1.63-.44-2.23h0c.52-.06,1.04-.07,1.57-.05,.85,.04,1.7,.35,2.52-.03,1.4-.66,.86-2.07,.54-3.26,.96-.2,1.93-.41,2.88-.64,.81-.2,1.38-.5,1.72-1.28,.67-1.52,.14-3.03-.89-4.24-2.99-3.4-9.24-3.58-13.02-1.58-14.04,7.82-14.53,29.85,2.57,34.15h0Zm16.22-38.71c1.27-.92,2.03-2.35,2.43-3.84,.21-.78-1-1.11-1.21-.33-.49,2.05-1.73,3.61-3.82,4.06-2.39-.23-3.25-2.51-3.6-4.58,.23-.28,.52-.49,.86-.62,1.56-.56,1.71-2.22,1.25-3.61,2.06-.75,4.13-1.47,6.09-2.47,2.73-1.49,4.96-3.5,8.21-3.7-2.73,2.58-3,10.68-3.17,14.43-2.34,.41-4.65,.57-7.05,.65h0Zm-4.57,16.7c2.39-5.98,6.38-11.21,10.74-15.88,.29-.04,.58-.09,.86-.15,.11,1.58-.26,3.47,.68,4.86,.74,.98,2.2,1.1,3.33,1.29,2.46,.38,4.98,.52,7.45,.21,1.47,5.98,.99,10.36-.48,15.63-.33,.59-.93,.26-1.08-.33-.09-3.43-.24-6.88-.71-10.25-.1-.52-.88-.38-.89,.12,.05,3.69,.44,7.39,.4,11.09,.03,2.75,.02,5.5-.09,8.25-.03,.76-.12,1.53,0,2.28v.12h-.01c-.04,.11-.04,.22,0,.33-.02,.08,0,.16,.04,.22,.39,.6,.95,1.04,1.27,1.7,.34,.73,.69,1.94-.18,2.39-.2,.03-.39,.07-.58,.14-.81,0-1.49,.06-2.3-.01,.49-1.79-.31-3.67-2.16-4.36,.63-5.63,1.19-11.47,.64-17.12-.07-.39-.74-.4-.8,0-.26,2-.09,4.04-.23,6.05-1.44-2.99-5.39-2.96-7.81-1.21h0c-.99,.7-1.91,1.5-2.72,2.4-.85,.9-1.82,1.91-2.39,3.02-.28,.54,.4,1.1,.85,.66,1.4-1.48,2.6-3.16,4.22-4.42,4.16-3.32,7.88-1.1,7.16,4.14-.23,2.2-1.19,4.23-2.25,6.14h0c-.95,.05-1.89,.14-2.83,.29-.68,.1-1.41,.1-1.92,.59-1.15,2.02,10.4-2.24,8.88,3.55-3.11,.13-6.23,.24-9.34,.37-2.12-.02-5.93,.2-7.29-1.81-3.39-6.66-3.22-13.44-.46-20.28h0Zm-19.68-5.38c2.33-3.47,5.68-6.07,9.88-6.66,3.02-.23,6.71,.39,8.24,3.33,.99,4.06-4.71,2.26-4.69,3.84,.22,1.27,1.41,3.02-.91,2.63h0c-1.41-.16-2.84-.08-4.22,.24-.52,.12-.53,.66-.25,.97,.14,.43,.77,.32,1.1,.54,.7,.49,.63,1.36-.18,1.65-.75,.25-1.57-.18-2.32,.06-.78,.05-1.52,.46-2.11,.86-2.77,1.16-3.93,6.58-4.01,9.3h0c-.08,.32-.19,.63-.31,.93-1.09,1-2.34,.08-2.96-1.05-1.88-5.37-.55-11.9,2.74-16.63h0Z"
                                            style={{ fill: "black" }}
                                        ></path>
                                        <path
                                            id="heart"
                                            className="e"
                                            d="M141.98,39.9c.06,.1,.18,.15,.29,.14,.12-.02,.21-.1,.25-.21,1.32-3.33,5.48-4.09,7.28-7.05,3.15-5.45-4.75-9.65-7.48-3.9-2.61-5.94-10.72-2.77-8.83,3.35,1.39,3.91,6.23,4.52,8.49,7.68h0Z"
                                            style={{ fill: "rgb(249, 128, 8)" }}
                                        ></path>
                                    </g>
                                )}
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Header;
