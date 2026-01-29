import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h2 className="font-display text-2xl font-bold mb-6">Profile & Settings</h2>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-muted/50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto justify-start">
                    <TabsTrigger value="profile" className="rounded-lg">Profile</TabsTrigger>
                    <TabsTrigger value="security" className="rounded-lg">Security</TabsTrigger>
                    <TabsTrigger value="notifications" className="rounded-lg">Notifications</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-8">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className="flex flex-col items-center gap-3">
                            <Avatar className="w-24 h-24 border-2 border-border">
                                <AvatarImage src="/placeholder.png" />
                                <AvatarFallback className="text-2xl bg-primary/10 text-primary">AK</AvatarFallback>
                            </Avatar>
                            <Button variant="outline" size="sm">Change Avatar</Button>
                        </div>

                        <div className="flex-1 space-y-4 w-full">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Ahmed" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Khan" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" defaultValue="Computer Science Student at MIT" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="university">University</Label>
                                <Input id="university" defaultValue="Massachusetts Institute of Technology" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-border">
                        <Button>Save Changes</Button>
                    </div>
                </TabsContent>

                <TabsContent value="security" className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="ahmed@example.com" />
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="font-semibold">Change Password</h3>
                        <div className="space-y-2">
                            <Label htmlFor="currentPass">Current Password</Label>
                            <Input id="currentPass" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="newPass">New Password</Label>
                            <Input id="newPass" type="password" />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <Button>Update Password</Button>
                    </div>
                </TabsContent>

                <TabsContent value="notifications" className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <div className="space-y-4">
                        <h3 className="font-semibold mb-4">Email Notifications</h3>
                        <div className="space-y-4">
                            {/* Mock Toggles */}
                            <div className="flex items-center justify-between">
                                <Label>Order Updates</Label>
                                <div className="w-10 h-6 bg-primary rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <Label>New Messages</Label>
                                <div className="w-10 h-6 bg-primary rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <Label>Promotions</Label>
                                <div className="w-10 h-6 bg-muted rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div></div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

export default Settings;
