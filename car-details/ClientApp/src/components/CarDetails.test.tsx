import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarDetails } from './CarDetails';

it('renders title', async () => {
    render(<MemoryRouter><CarDetails /></MemoryRouter>);

	const mockSuccessResponse = [
		{
			"registration": "YC08JWU",
			"make": "FORD",
			"model": "MONDEO",
			"firstUsedDate": "2008.04.17",
			"fuelType": "Diesel",
			"primaryColour": "Silver",
			"motTests": [{
				"completedDate": "2019.06.11 12:46:34",
				"testResult": "PASSED",
				"expiryDate": "2020.12.10",
				"odometerValue": "117854",
				"odometerUnit": "mi",
				"motTestNumber": "301759864670",
				"rfrAndComments": []
			}, {
				"completedDate": "2019.06.10 14:22:41",
				"testResult": "FAILED",
				"odometerValue": "117851",
				"odometerUnit": "mi",
				"motTestNumber": "135781865215",
				"rfrAndComments": [{
					"text": "Nearside Front Upper Anti-roll bar ball joint dust cover no longer prevents the ingress of dirt (5.3.4 (b) (ii))",
					"type": "FAIL"
				}, {
					"text": "Offside Front Upper Anti-roll bar ball joint dust cover no longer prevents the ingress of dirt (5.3.4 (b) (ii))",
					"type": "FAIL"
				}, {
					"text": "Offside Registration plate lamp inoperative in the case of multiple lamps or light sources (4.7.1 (b) (i))",
					"type": "MINOR"
				}]
			}, {
				"completedDate": "2018.12.04 09:16:14",
				"testResult": "PASSED",
				"expiryDate": "2019.12.12",
				"odometerValue": "116670",
				"odometerUnit": "mi",
				"motTestNumber": "592086214342",
				"rfrAndComments": []
			}, {
				"completedDate": "2018.12.04 09:16:13",
				"testResult": "FAILED",
				"odometerValue": "116670",
				"odometerUnit": "mi",
				"motTestNumber": "219699932594",
				"rfrAndComments": [{
					"text": "Nearside Track rod end ball joint has excessive play (2.1.3 (b) (i))",
					"type": "PRS"
				}, {
					"text": "Offside Stop lamp(s) all not working (4.3.1 (a) (iii))",
					"type": "PRS"
				}, {
					"text": "Front Windscreen wiper does not clear the windscreen effectively (3.4 (b) (ii))",
					"type": "PRS"
				}]
			}, {
				"completedDate": "2017.12.06 09:25:22",
				"testResult": "PASSED",
				"expiryDate": "2018.12.12",
				"odometerValue": "110854",
				"odometerUnit": "mi",
				"motTestNumber": "744238405896",
				"rfrAndComments": []
			}, {
				"completedDate": "2016.12.13 12:08:10",
				"testResult": "PASSED",
				"expiryDate": "2017.12.12",
				"odometerValue": "105244",
				"odometerUnit": "mi",
				"motTestNumber": "720264836161",
				"rfrAndComments": []
			}, {
				"completedDate": "2016.12.13 09:22:48",
				"testResult": "FAILED",
				"odometerValue": "105232",
				"odometerUnit": "mi",
				"motTestNumber": "505124510669",
				"rfrAndComments": [{
					"text": "Horn not working (1.6.2a)",
					"type": "FAIL"
				}]
			}, {
				"completedDate": "2015.11.18 14:46:06",
				"testResult": "PASSED",
				"expiryDate": "2016.12.10",
				"odometerValue": "93940",
				"odometerUnit": "mi",
				"motTestNumber": "577570797789",
				"rfrAndComments": [{
					"text": "Nearside Obligatory mirror damaged, but not seriously affecting the rear view (8.1.2a)",
					"type": "ADVISORY"
				}]
			}, {
				"completedDate": "2015.11.18 14:46:05",
				"testResult": "FAILED",
				"odometerValue": "93940",
				"odometerUnit": "mi",
				"motTestNumber": "437850808139",
				"rfrAndComments": [{
					"text": "Horn not working (1.6.2a)",
					"type": "PRS"
				}, {
					"text": "Nearside Stop lamp not working (1.2.1b)",
					"type": "PRS"
				}, {
					"text": "Nearside Obligatory mirror damaged, but not seriously affecting the rear view (8.1.2a)",
					"type": "ADVISORY"
				}]
			}, {
				"completedDate": "2014.11.27 14:13:55",
				"testResult": "PASSED",
				"expiryDate": "2015.12.10",
				"odometerValue": "84631",
				"odometerUnit": "mi",
				"motTestNumber": "258361834307",
				"rfrAndComments": [{
					"text": "Nearside Trailing arm rubber bush deteriorated but not resulting in excessive movement (2.4.G.2)",
					"type": "ADVISORY"
				}, {
					"text": "Offside Trailing arm rubber bush deteriorated but not resulting in excessive movement (2.4.G.2)",
					"type": "ADVISORY"
				}]
			}, {
				"completedDate": "2013.12.11 15:23:21",
				"testResult": "PASSED",
				"expiryDate": "2014.12.10",
				"odometerValue": "80822",
				"odometerUnit": "mi",
				"motTestNumber": "897295243322",
				"rfrAndComments": [{
					"text": "Nearside Front Tyre worn close to the legal limit (4.1.E.1)",
					"type": "ADVISORY"
				}, {
					"text": "Offside Front Tyre worn close to the legal limit (4.1.E.1)",
					"type": "ADVISORY"
				}, {
					"text": "Rear Brake pad(s) wearing thin (3.5.1g)",
					"type": "ADVISORY"
				}]
			}, {
				"completedDate": "2013.06.05 15:56:51",
				"testResult": "PASSED",
				"expiryDate": "2014.06.13",
				"odometerValue": "76057",
				"odometerUnit": "mi",
				"motTestNumber": "657226953111",
				"rfrAndComments": []
			}, {
				"completedDate": "2012.06.08 13:47:35",
				"testResult": "PASSED",
				"expiryDate": "2013.06.13",
				"odometerValue": "69794",
				"odometerUnit": "mi",
				"motTestNumber": "836830762102",
				"rfrAndComments": [{
					"text": "Offside Front Tyre worn close to the legal limit (4.1.E.1)",
					"type": "ADVISORY"
				}]
			}, {
				"completedDate": "2011.06.14 08:53:59",
				"testResult": "PASSED",
				"expiryDate": "2012.06.13",
				"odometerValue": "62509",
				"odometerUnit": "mi",
				"motTestNumber": "298905561470",
				"rfrAndComments": []
			}, {
				"completedDate": "2011.04.14 15:30:31",
				"testResult": "PASSED",
				"expiryDate": "2012.04.17",
				"odometerValue": "62388",
				"odometerUnit": "mi",
				"motTestNumber": "305604701109",
				"rfrAndComments": []
			}, {
				"completedDate": "2011.04.14 12:35:23",
				"testResult": "FAILED",
				"odometerValue": "62388",
				"odometerUnit": "mi",
				"motTestNumber": "108384901163",
				"rfrAndComments": [{
					"text": "Nearside Windscreen wiper does not clear the windscreen effectively (8.2.2)",
					"type": "FAIL"
				}, {
					"text": "Offside Windscreen wiper does not clear the windscreen effectively (8.2.2)",
					"type": "FAIL"
				}, {
					"text": "Front Brake pad(s) wearing thin (3.5.1g)",
					"type": "ADVISORY"
				}, {
					"text": "front discs worn",
					"type": "USER ENTERED"
				}]
			}]
		}];

	const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'yc08jwu' }
    });

	screen.getByText('Submit').click();

	expect(await screen.findByText(/MONDEO/)).toBeInTheDocument();
});