import { useState } from 'react';

function QueryForm() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [feedback, setFeedback] = useState(null);

    async function handleSubmit() {
        try {
            const res = await fetch("api/query", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });

            const data = await res.json();
            setResponse(data.sentiment || 'No response');
            setFeedback(null); // reset any feedback
        } catch (err) {
            setResponse('Error querying model');
        }
    }

    async function handleFeedback(value) {
        setFeedback(value);

        try {
            await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query, feedback: value === 'yes' ? 1 : 0 })
                // body: JSON.stringify({ query, feedback: value })
            });
        } catch (error) {
            console.error("Failed to send feedback", error);
        }

        // You can later replace this with a real API call:
        // fetch('/api/feedback', { ... })
        console.log(`Feedback sent: ${value} for query "${query}"`);
    }
    return (
        <div className="query-box">
            <h3>Enter your review here:</h3>
            <input
                type="text"
                placeholder="Enter a sentence..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>

            {response && (
                <div style={{ marginTop: '1rem' }}>
                    <p><strong>Our response:</strong></p>
                    <p><em>[{response}]</em></p>

                    {feedback === null ? (
                        <div>
                            <h4>Are you satisfied with this response?</h4>
                            <button onClick={() => handleFeedback('yes')}>👍</button>
                            <button onClick={() => handleFeedback('no')}>👎</button>
                        </div>
                    ) : (
                        <p><em>Thanks for your feedback!</em></p>
                    )}
                </div>
            )}
        </div>
    );




    //   return (
    //     <div style={{ marginTop: '2rem' }}>
    //       <h3>Ask the model</h3>
    //       <input
    //         type="text"
    //         placeholder="Enter a sentence..."
    //         value={query}
    //         onChange={(e) => setQuery(e.target.value)}
    //         style={{ padding: '0.5rem', width: '60%', marginRight: '10px' }}
    //       />
    //       <button onClick={handleSubmit}>Submit</button>

    //       {response && (
    //         <div style={{ marginTop: '1rem' }}>
    //           <p><strong>Model says:</strong> {response}</p>

    //           {feedback === null ? (
    //             <div>
    //               <span>Was this correct? </span>
    //               <button onClick={() => handleFeedback('yes')}>👍</button>
    //               <button onClick={() => handleFeedback('no')}>👎</button>
    //             </div>
    //           ) : (
    //             <p><em>Thanks for your feedback!</em></p>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   );
}

export default QueryForm;
