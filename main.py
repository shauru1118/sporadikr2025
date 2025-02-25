import speedtest as st
import time


def Speed_Test():
    test = st.Speedtest()

    down_speed = test.download()
    down_speed = round(down_speed / 10**6, 2)
    print("Download Speed in Mbps:", down_speed)

    up_speed = test.upload()
    up_speed = round(up_speed / 10**6, 2)
    print("Upload Speed in Mbps:", up_speed)

    ping = test.results.ping
    print("Ping:", ping)

    return down_speed, up_speed, ping


d = []
u = []
p = []

for i in range(0, 10):
    print(f"Test {i+1}:\n")

    res = Speed_Test()
    print("\n")

    d.append(res[0])
    u.append(res[1])
    p.append(res[2])

    time.sleep(10)  # wait 10 seconds before next test

print("\n\nDownload Speeds:")
print(d)

print("\nUpload Speeds:")
print(u)

print("\nPings:")
print(p)

print("\n\nAverage Download Speed:", round(sum(d) / len(d), 2))
print("Average Upload Speed:", round(sum(u) / len(u), 2))
print("Average Ping:", round(sum(p) / len(p), 2))
