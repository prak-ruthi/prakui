export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'Dr. Sheelavathi Natraj',
      experience: 21,
      location: 'JP Nagar, Bangalore',
      clinic: 'Sapphire Skin And Aesthetics Clinic',
      fee: 800,
      rating: 94,
      reviews: 1506,
      available: true
    },
    {
      id: 2,
      name: 'Aesthetic Heart Dermatology & Cardiology Clinic',
      experience: 11,
      location: 'Jayanagar',
      clinic: 'Aesthetic Heart',
      fee: 800,
      rating: 97,
      reviews: 159,
      available: false
    }
  ]);
}
