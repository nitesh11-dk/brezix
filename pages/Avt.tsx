// pages/combined.tsx or in any component
const CombinedPage = () => {
  return (
    <div>

      {/* Embed the Vite app running on port 5173 */}
      <iframe className=""
        src="https://3dwraappers-xgha.vercel.app/"
        style={{
          width: '600px',
          height: '700px', // Adjust as needed
          border: 'none'
        }}
        loading="eager"
      />
    </div>
  );
};

export default CombinedPage;
