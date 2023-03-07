const Header = () => {
    return (
        <div
            className="relative bg-gray-900 overflow-y-auto w-full"
            style={{
                zIndex: 1,
                height: '135px',
                minHeight: '125px',
                maxHeight: '300px',
                padding: '10px',
                resize: 'vertical',
            }}
        >
            <div
                className="relative w-full flex justify-between items-center"
                style={{
                    paddingBottom: '10px',
                    paddingTop: '10px',
                }}
            >
                <h2
                    className="flex items-center"
                    style={{
                        color: '#fff',
                        margin: '0',
                        fontSize: '1.5rem',
                    }}
                >
                    <span>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1280 1280"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xml:space="preserve"
                            xmlns:serif="http://www.serif.com/"
                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                        >
                            <g transform="matrix(9.97755,0,0,9.97755,-108.316,-438.823)">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M92.12,99.87L92.12,111.94L84.69,112.36L84.69,85.07C84.69,73.15 92.45,67.73 99.78,67.73C107.43,67.73 115.09,73.53 115.09,83.59C115.09,99.33 98.61,99.87 92.12,99.87ZM99.69,75.43C96.05,75.43 92.16,77.96 92.16,85.05L92.16,92.28C107.31,92.28 107.31,86.85 107.31,83.6C107.31,78 103.36,75.43 99.69,75.43ZM58.24,99.88C51.66,99.88 34.91,99.88 34.91,83.88C34.91,73.65 42.69,67.76 50.46,67.76C57.91,67.76 65.8,73.27 65.8,85.38L65.8,92.38L80.51,92.49L79.82,99.94L58.24,99.88ZM58.24,85.35C58.24,78.02 54.24,75.41 50.46,75.41C46.68,75.41 42.59,78.05 42.59,83.85C42.59,87.21 42.59,92.28 58.24,92.32L58.24,85.35ZM58.24,116.29L58.24,104.9L65.8,103.9L65.8,130.9C65.8,143 57.91,148.52 50.46,148.52C42.69,148.52 34.91,142.62 34.91,132.4C34.91,116.34 51.66,116.29 58.24,116.29ZM50.46,140.77C54.23,140.77 58.24,138.16 58.24,130.83L58.24,123.83C42.59,123.88 42.59,128.95 42.59,132.31C42.59,138.13 46.67,140.77 50.46,140.77ZM113.6,131.77C113.6,141.32 106.34,146.77 99.08,146.77C92.08,146.77 84.76,141.63 84.76,130.32L84.76,123.8L70.45,123.8L69.96,116.2L91.82,116.2C98,116.29 113.6,116.88 113.6,131.8L113.6,131.77ZM92.13,130.43C92.13,136.98 95.72,139.32 99.13,139.32C102.54,139.32 106.13,136.96 106.13,131.77C106.13,128.77 106.13,124.24 92.13,124.2L92.13,130.43Z"
                                        style="fill:rgb(0,205,93);"
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                    RePrompt
                </h2>
            </div>
            <span style={{ margin: 0, maxWidth: '150px' }}>
                <a target="_blank" href="https://www.buymeacoffee.com/beenyaa">
                    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=beenyaa&button_colour=009B1C&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
                </a>
            </span>
        </div>
    );
};

export default Header;
