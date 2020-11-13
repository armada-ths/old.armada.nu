---
slug: /armadacompetition
title: Armada competition
layout: CompetitionPage
description: Page
menuPage: false
priority: 4
header: /assets/images/header-images/competition.jpg
noJumbotron: false
---
<div class='competition-logo'>
    <img alt='' id='logo' src='/assets/Armada_competition_filled.png'/>
</div>

# Armada Competition

## Background

The Armada Competition is a gamification feature of the virtual fair with the impact goals of (1) attracting more students to the fair and (2) nudging the students to interact with the fair in a more constructive way. There will be incitements (prizes) to attract students to the concept and tasks (points) that measure the students activity. The students will earn points for interacting with the fair and then the prizes will be raffled out in a lottery where students have one lottery ticket for each point earned. There will be 50 prizes, ranging in market value from 700 up to 4000kr. Among those prizes are Ipads, noise cancelling Bluetooth headphones and a weekend with a Volvo.

## Purpose of the information

This information is a full disclosure of all terms and conditions that is included in the Armada Competition. THS Armada believes in transparency in everything we do and the aim is that all participating students can see how everything relating to Armada Competition is done. This is taken to the extent that the lottery algorithm used is also disclosed in this document.

## Contact and responsibilities

Leonard Hökby, Head of Logistics and Fair is the inventor and responsible for the Armada Competition. Leonard can be reached at [leonard.hokby@armada.nu](mailto:leonard.hokby@armada.nu). Responsible for THS Armada 2020 is Project Manager Daniel Aston, reachable at [a@armada.nu](mailto:a@armada.nu).

# Points collecting

## Partners

Our digital fair partner GraduateLand collects the data used in the competition and is responsible for all personal data.

## Tracking and collecting of personal data on the virtual fair

The action on the fair is traced by GraduateLand for evaluation purposes and this information will be used for armada competition. For information of exactly what is stored and not, we refer to GraduateLand. The information used for the Armada competition is the following:

* Profile completeness
* Chats received
* Booths viewed
* Live presentations attended
* Name and email address

## Point scoring system

The following different activities will generate Armada Competition score:

* Register at the fair
* High completeness of profile
* Chats received from companies
* Booths viewed
* Live presentations viewed
* Completion of D&I quiz

**Registering at the fair**

Every student registered at the fair will get 1 point, so they are in the running for the prizes

High completeness of profile

* Students with a 90% complete profile at the closing of the fair will be awarded with 10 points.
* Students with a 100% complete profile at the closing of the fair will be awarded with an additional 20 points.

**Chats received from companies**

* Students who receives 5 chats from a company representative before the 18/11 16:00 will be awarded 1 point
* Students who receive 20 chats from a company representative before the 18/11 16:00 will be awarded with an additional 3 points.
* Students who receive 50 chats from a company representative before the 18/11 16:00 will be awarded with an additional 5 points.
* Students who receive 100 chats from a company representative before the 18/11 16:00 will be awarded with an additional 10 points.

**Booths viewed**

* Students who view 5 booths on fair will be awarded 1 point
* Students who view 10 booths on the fair will be awarded an additional 3 points
* Students who view 20 booths on the fair will be awarded an additional 5 points
* Students who view all booths on the fair will be awarded an additional 10 points

**Live presentations viewed**

* Students who attend 1 live presentation will be awarded 1 point
* Students who attend 3 live presentations will be awarded an additional 3 points
* Students who attend 5 live presentations will be awarded an additional 5 points
* Students who attend 10 live presentations will be awarded an additional 10 points

**Completion of D&I Quiz**
Students who complete the D&I Quiz available at the virtual platform will receive 2 points in the Armada Competition. 

The maximum points possible to earn is 90 points.

# Lottery principles

## Tickets awarded

After the closing of the fair, Armada will calculate for each participant how many points he or she has earned. Each point will equal 1 ticket in the competition.

## Raffling tickets

When the number of tickets is determined the winners will be raffled out. This will be done digitally with the Mersenne Twister Pseudorandom number generator. Each participant can only win one time. Therefore, after winning one prize, the rest of the students' tickets will be consumed. The prizes will be raffled in order of monetary value as determined by Armada so the prize with highest monetary value will be awarded to the first winner, the second highest value prize to the second winner and so on. A detailed description of the algorithm used can be found in the first appendix.

## Announcement

The winners will be contacted by email or by phone. After being contacted, the winner has 7 days to collect the prize per Armadas instructions if nothing else is agreed upon. If the winner fail to respond within 7 days from receiving an email from Armada, Armada has the right to draw another winner.

How the prizes are given to the winners depend on the prize and will be determined by the winner and Armada when contact is established.

# Prizes

## Ranking

The prizes will be ranked by Armada according to market value where prize number 1 is the prize with highest market value.

## Sponsored prizes

**Volvo Cars**

Volvo cars sponsor the Armada competition with one weekend with a rented Volvo car from Volvo Studio Stockholm, of a value between 1800 and 4000kr depending on which car the student chooses. This prize comes with the added requirement that the winner must have a driver's license. If the winner does not have a driver's license, he or she will be awarded the prize that is directly below it in the ranking. Then the prize will be offered to the next winner.

Additional conditions apply and Volvo Cars says the following:

*“The winner is asked to contact Volvo Studio minimum one week prior to the desired rental date - this in order to make sure that your car is ready and available on your desired weekend. In order to make use of this offer, you need to have a driver’s license valid in Sweden. You will also be asked to sign a rental agreement with Volvo Studio when you pick up the car. The car is covered by insurance and you as a driver is responsible for driving it in a careful way. Any potential damage to the car caused by the user will be covered by the driver.”*

**Electrolux**

Electrolux sponsor the Armada Competition with a powered blender.

**VOI**

VOI sponsor the Armada Competition with 1000kr in VOI Credits. The credits will be handed out through a gift certificate

## Armada funded prizes

In order to increase the number of prizes, Armada will fund prizes at two levels, one high level with fewer items with a higher market value and one low level with more items of lower market value. Armada aims at providing 50 prizes, but will not provide less than 40 prizes.

**IPads**
Armada supplies 3 IPads to the competition. These will be the 32 gb memory base model from Apple. 

**Headphones**
Armada will provide 11 bluetooth noise cancelling headphones from JBL, the JBL TUNE 750BTNC model. 

**ICA gift certificate**
Armada will provide 33 gift certificates loaded with 700kr each. These can be used at any ICA store.

# Appendix 1 - A lottery algorithm for the Armada competition

## Overview

**Input**
An excel with one column with a unique identifier, one with names and one column with number of lottery tickets.

**Algorithm**
A lottery algorithm that gives each ticket an equal chance of winning. There will be drawn several winners, but once one person has won his or her remaining tickets should not be part of the next draw.

**Output**
A list with name and unique identifier for the winners, in the same order they were drawn by the algorithm

The input will be provided to you on 19/11 and I want the output asap after that. The code needs to be done and tested before the final input is given to you so we can run the lottery one time only.
I also want to know which randomizer or lottery function will be used for full disclosure to the student, and preferably the whole code should be disclosed before the fair.

## Details

**Chance of winning**
number of personal tickets/total sum of tickets

**Reliability**
The numpy.random uses the Mersenne Twister Pseudorandom number generator. The sequence is predetermined by the PRNG´s seed, which could include truly random values. 

The algorithm will only be run once, and should thus be deemed reliable enough.

## Pseudocode in text
The algorithm will generate a shuffled file/list by first creating a row for each ticket that a person holds and then shuffle that file/list. After the file/list has been shuffled then i - amount of winners will be picked randomly. This is done by selecting a row using the numpy.random.randint(0, sum of tickets). If the row or the unique ID is already in the WinnerList then a new winner is selected instead of that one. Starting from row 0 to row i is the order that the winners were picked. 

**Pseudocode**

`function ArmadaLottery(file)`
    
	    TicketFile/List GenerateTicket(file)

	    ShuffledFile/List ShuffleTickets(/file/list)

`WinnerList[]`

`PickWinners(ShuffledFile/List, WinnerList)`

`print(WinnerList)`	

`function GenerateTicket(file)`

	    "Creates a row for each ticket that a person holds"

	    return file/list
	
`function ShuffleTickets(file/list)`

	    ShuffledFile/List numpy.random.shuffle(file/list)

	    "Or similar shuffle function"

	    return ShuffledFile/List

`function PickWinners(ShuffledFile/List, WinnerList)`

	    for(0<i) (i =amount of winners)

		     x numpy.random.randint(0,NumberOfRows(ShuffledFile/List)

		     if(ShuffledFile/List(Row(x) && uniqueID) not in WinnerList

		     "Might just need to check if the uniqueID is in WinnerList"

			    add(row(x) to WinnerList) to row(i)

		    else

			    i=i-1

	return WinnerList