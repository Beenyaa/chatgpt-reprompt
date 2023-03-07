import Header from "./components/Header";

const App = () => {
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
        <Header/>
            
        </div>
    );
};

export default App;
