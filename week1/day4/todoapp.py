#To-do App
priority_dic = {"H":"high","L":"low","M":"medium"}
task_ls = []
task = str()
print("\n\nLet's create a TODO list!\n")
while ((task != 'q') and (task != 'Q')):
    task = input("\nPress 1 to add task\n"
        "Press 2 to delete task\n"
        "Press 3 to view all tasks\n"
        "Press q to quit\n"        
        "\n")
    if (task == "1"):
        title = input("\nWhat is the title of your task?\n")
        priority = input("\nWhat is the priority of your task?\n"
                         "L - low\n"
                         "M - medium\n"
                         "H - high\n"
                         "\n")
        if ((priority.upper() != "L") and (priority.upper() != "M") and (priority.upper() != "H")):
             print("\nSorry, that input is not valid, try selecting a new operation.\n")
             continue
        title_dic = {'title':title,'priority':priority}
        task_ls.append(title_dic)
        print("\n" + title +" has been added to the list of tasks as " + priority_dic[priority.upper()] + " priority.\n")
    elif(task == "2"):
        for i in range(0,len(task_ls)):
            print(i+1,' - ',task_ls[i]['title'],' - ',priority_dic[task_ls[i]['priority'].upper()],'\n')
        remove = input("\nSelect a task number to remove it from the todo list.\n")
        if ((int(remove)-1 >= len(task_ls)) or (remove == '0')):
             print("\nSorry, that input is not valid, try selecting a new operation.\n")
             continue
        print("\n" + task_ls[int(remove)-1]['title'] + " has been removed from the list of tasks to be completed.\n")
        task_ls.pop(int(remove)-1)
    elif(task == "3"):
        print("\nTasks to be completed:\n")
        for i in range(0,len(task_ls)):
            print("\n" + i+1,' - ',task_ls[i]['title'],' - ',priority_dic[task_ls[i]['priority'].upper()],'\n')
    elif(task.lower() == 'q'):
        continue
    else:
        print("\nError: you did not selelct an applicable task to this application.\n")
