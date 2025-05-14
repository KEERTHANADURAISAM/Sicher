import React from 'react';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatusCounter = () => {
  const stats = [
    { label: 'Client Projects', value: 200 },
    { label: 'Happy Clients', value: 195 },
    { label: 'Years of Experience', value: 3 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once
    threshold: 0.3,     // Trigger when 30% of the component is visible
  });

  return (
    <Box ref={ref} sx={{ py: 6, background: "linear-gradient(to right, #627DFE, #5DA1FC)",
        color: "RGB(255, 255, 255)", }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Achievements
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          flexWrap: 'wrap',
          mt: 4,
        }}
      >
        {stats.map((stat, index) => (
          <Box key={index} sx={{ textAlign: 'center', minWidth: 150 }}>
            <Typography variant="h3" color="white">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatusCounter;
