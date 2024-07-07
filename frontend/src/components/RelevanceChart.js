import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

// Register necessary components

// const SimilarityScores = () => {
//   const [scores, setScores] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend
//     axios.get('http://localhost:3000/api/similarity-scores')
//       .then(response => {
//         setScores(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the similarity scores!', error);
//       });
//   }, []);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RelevanceChart = ({ similarityScore }) => {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:3000/api/similarity-scores')
      .then(response => {
        setScores(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the similarity scores!', error);
      });
  }, []);

  const data = {
    labels: ['File A vs. File B'],
    datasets: [
      {
        label: 'Similarity Score',
        data: [similarityScore],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Relevance Between Text Files',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RelevanceChart;