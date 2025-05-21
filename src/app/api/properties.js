export async function GET() {
  const properties = [
    {
      title: "Property 1",
      location: "503/16 Lonsdale Street, Braddon",
      price: 1100,
      latitude: 33.6844,
      longitude: 73.0479,
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Property 2",
      location: "20 Elm Street, Kingston",
      price: 1200,
      latitude: 33.6854,
      longitude: 73.0489,
      image: "https://via.placeholder.com/300x200"
    },
    // aur properties yahan add karo
  ];

  return new Response(JSON.stringify(properties), {
    headers: { 'Content-Type': 'application/json' },
  });
}
