/*
	Pathfinding using the A* Algorigthm: By Greg Felber
        
        This function is used to determine the quickest path from a starting node to a target node via a connected
series of nodes.

	The A* Algorithm begins by checking to see the visible waypoints of the starting node. These connected nodes
 will be known as its neighbors. Each neighbors cost "F" will be calculated by summing the distance between 
the starting node to the best point, "G", and the best point to the target node, "H". The neighbor with the lowest 
cost is selected as the best node and added to the array of closed nodes and removed from the list of open nodes 
(meaning it can't be used as a best node again). The previous best node is set as the best nodes parent (if its the 
first iteration, the starting node will be the best nodes parent).

	This process is repeated until the best node is the target node. Once this happens, the "parent" value will 
be traversed starting with the target node, until the starting node is reached. This series of parent nodes will be 
the quickest path from the starting node to the target node

*/

//letiables on a given AI_AutoWayPoint
let G : float;	//distance from the starting node to the best node
let H : float;	//hurestic distance from the best node to the destination
let F : float;	//total cost
let myParent : AI_AutoWayPoint;  //The previous best node

static function AStar(startingNode : AI_AutoWayPoint, targetNode : AI_AutoWayPoint) : Array
{

	let openNodes = Array();	//Nodes that haven't been visited yet
	let closedNodes = Array();	//Nodes that have already been visited

	//Start from the starting node
	closedNodes.Add(startingNode);
	let bestNode : AI_AutoWayPoint = startingNode;

	//Keep getting best node until the destination point is reached
	while(bestNode != targetNode)
	{
		//Grab all visible neighbors of the current best node
		bestNode.RecalculateConnectedWaypoints();
		let openIndex : int;

		//iterate through all the neihbors of the current best node
		for (let newNode : AI_AutoWayPoint in bestNode.GetComponent(AI_AutoWayPoint).connected) 
		{
			//if a node inside bestNode is not in the openNodes array calculate its G, H and F values
			if (!containsNode(openNodes, newNode))
			{
				if (!containsNode(closedNodes, newNode))
				{
					//Distance from the starting node to the neighbor
					newNode.GetComponent(AI_AutoWayPoint).G = bestNode.GetComponent(AI_AutoWayPoint).G + Vector3.Distance(bestNode.transform.position, newNode.transform.position);

					//Distance from the neighbor to the target node
					newNode.GetComponent(AI_AutoWayPoint).H = Vector3.Distance(targetNode.transform.position, newNode.transform.position);

					//Total Cost
					newNode.GetComponent(AI_AutoWayPoint).F = newNode.GetComponent(AI_AutoWayPoint).G + newNode.GetComponent(AI_AutoWayPoint).H;	
					newNode.GetComponent(AI_AutoWayPoint).myParent = bestNode;
					openNodes.Add(newNode);	
				}
			}
			else
			{
				if (bestNode.GetComponent(AI_AutoWayPoint).G + Vector3.Distance(bestNode.transform.position, newNode.transform.position) < newNode.GetComponent(AI_AutoWayPoint).G)
				{
					if (!containsNode(closedNodes, newNode))
					{
						newNode.GetComponent(AI_AutoWayPoint).G = bestNode.GetComponent(AI_AutoWayPoint).G + Vector3.Distance(bestNode.transform.position, newNode.transform.position);
						newNode.GetComponent(AI_AutoWayPoint).myParent = bestNode;
					}
				}
			}
		}
		targetNode.RecalculateConnectedWaypoints();
		let lowF : float = 10000.0;

		//Loop through the open nodes around the starting target
		for (let i = 0; i < openNodes.length; i++) 
		{
			//if the node has already been visited, don't bother checking it
			if (containsNode(closedNodes, openNodes[i]))
			{
				continue;
			}
			//get the node within open list that has the lowest F value
			if (openNodes[i].GetComponent(AI_AutoWayPoint).F  < lowF)
			{
				lowF = openNodes[i].GetComponent(AI_AutoWayPoint).F;
				bestNode = openNodes[i];
				openIndex = i;
			}
		}

		//lowest cost is chosen
		if (openNodes.length > 0)
		{
			closedNodes.Add(bestNode);
			openNodes.RemoveAt(openIndex);
		}
	}
	let path = Array();
	let currentNode : AI_AutoWayPoint = targetNode;
	let timeout : int = 0;

	//retrieve the parents of each of the nodes, beginning with the final node to retrieve the shortest path
	while (currentNode != startingNode)
	{
		path.Add(currentNode);
		currentNode = currentNode.GetComponent(AI_AutoWayPoint).myParent;
	}
	path.Add(startingNode);
	path = path.reverse();

	return path;	
}

/*
Checks to see if a waypoint is contained within a given array
*/
static function containsNode(A : Array, searchValue : AI_AutoWayPoint) : boolean
{
	for (let j = 0; j < A.length; j++)
	{
		if (A[j] == searchValue)
		{
			return true;
		}
	}
	return false;
}