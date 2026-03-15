
def hanoi_solver(n):
    # Initialize three rods
    source = list(range(n, 0, -1))
    auxiliary = []
    destination = []

    # List to store every state of rods
    states = []

    # Function to save the current state of rods
    def record_state():
        states.append(f"{source} {auxiliary} {destination}")

    # Record the initial configuration
    record_state()

    # Recursive function to solve Tower of Hanoi
    def solve(num, start, end, helper):
        if num == 1:
            # Move the top disk from start rod to end rod
            end.append(start.pop())
            record_state()
        else:
            # Move n-1 disks to helper rod
            solve(num - 1, start, helper, end)

            # Move the largest disk to destination
            end.append(start.pop())
            record_state()

            # Move n-1 disks from helper rod to destination
            solve(num - 1, helper, end, start)

    # Start solving
    solve(n, source, destination, auxiliary)

    # Return all states as a single string separated by newline
    return "\n".join(states)