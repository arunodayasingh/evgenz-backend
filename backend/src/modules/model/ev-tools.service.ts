import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EvToolsService {
    calculateSavings(data: any) {
        const { dailyDistance, electricityPrice, petrolPrice, vehicleMileage } = data;

        if (!dailyDistance || !electricityPrice || !petrolPrice || !vehicleMileage) {
            throw new BadRequestException('All fields are required: dailyDistance, electricityPrice, petrolPrice, vehicleMileage');
        }

        // Assumed average EV mileage: 7 km/kWh (conservative car average)
        const evMileage = 7;

        // Petrol running cost per km
        const petrolCostPerKm = petrolPrice / vehicleMileage;

        // EV running cost per km
        const evCostPerKm = electricityPrice / evMileage;

        const dailySavings = (petrolCostPerKm - evCostPerKm) * dailyDistance;
        const monthlySavings = dailySavings * 30;
        const yearlySavings = dailySavings * 365;

        return {
            dailySavings: Math.round(dailySavings),
            monthlySavings: Math.round(monthlySavings),
            yearlySavings: Math.round(yearlySavings),
        };
    }
}
