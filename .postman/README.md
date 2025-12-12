# Postman Collection for Car Dealership API

This folder contains Postman collections and environments for testing the Car Dealership API.

## Files

- **Car Dealership API.postman_collection.json** - Main API collection with all endpoints
- **Local Environment.postman_environment.json** - Local development environment variables

## Import Instructions

1. Open Postman
2. Click "Import" button
3. Select both JSON files from this folder
4. The collection and environment will be imported

## Available Endpoints

### Cars Module
- `GET /cars` - Get all cars
- `GET /cars/:id` - Get a specific car by UUID
- `POST /cars` - Create a new car
- `PATCH /cars/:id` - Update a car
- `DELETE /cars/:id` - Delete a car

### Brands Module
- `GET /brands` - Get all brands
- `GET /brands/:id` - Get a specific brand
- `POST /brands` - Create a new brand
- `PATCH /brands/:id` - Update a brand
- `DELETE /brands/:id` - Delete a brand

### Seed Module
- `GET /seed` - Populate database with initial data

## Example Requests

### Create a Car
```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2024
}
```

### Create a Brand
```json
{
  "name": "Honda"
}
```

### Update a Car
```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024
}
```

### Update a Brand
```json
{
  "name": "Honda Motors"
}
```

## Environment Variables

- `base_url` - Base URL of the API (default: http://localhost:3000)
- `car_id` - UUID of a car (to be filled after creating/getting a car)
- `brand_id` - UUID of a brand (to be filled after creating/getting a brand)

## Testing Workflow

1. Import the collection and environment
2. Select "Local Development" environment
3. Run `GET /seed` to populate the database
4. Run `GET /cars` or `GET /brands` to see the seeded data
5. Copy a UUID from the response and set it in the environment variables
6. Test other endpoints using the stored UUIDs
