#include <iostream>
#include <fstream>
#include <ctime>
#include <string>
#include <windows.h>

std::string getCurrentDate() 
{
    time_t now = time(0);
    tm tstruct;
    char buf[11];
    localtime_s(&tstruct, &now);
    strftime(buf, sizeof(buf), "%Y-%m-%d", &tstruct);
    return buf;
}

void createTicket() 
{
    std::string name, issue;
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);

    std::cout << "Describe the issue: ";
    std::getline(std::cin, issue);

    std::ifstream infile("tickets.txt");
    int ticketID = 1;
    std::string line;
    while (std::getline(infile, line)) ticketID++;
    infile.close();

    std::ofstream file("tickets.txt", std::ios::app);
    file << ticketID << " | " << name << " | " << issue << " | Open | " << getCurrentDate() << "\n";
    file.close();

    std::cout << "\nTicket created! Opening dashboard...\n";
    ShellExecute(0, 0, L"dashboard.html", 0, 0, SW_SHOW);
}

int main() 
{
    createTicket();
    return 0;
}
